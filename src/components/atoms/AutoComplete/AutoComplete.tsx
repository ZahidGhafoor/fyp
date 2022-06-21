import Input from "../Input";
import { InputProps } from "../Input";
import { useEffect, useRef } from "react";
import ToasterService from "utils/toaster.util";
import { AutoCompleteOwnProps, fields } from ".";

let google = (window as any).google;

export type AutoCompletesProps = AutoCompleteOwnProps & InputProps;

export default function AutoComplete({
	val,
	value,
	handleChange,
	...rest
}: AutoCompletesProps) {
	const ref = useRef<any>(null);
	const isInit = useRef(false);

	useEffect(() => {
		if (!google || isInit.current) return;

		const autocomplete = new google.maps.places.Autocomplete(ref.current, {
			fields,
			types: ["establishment"], // address, geocode, establishment, (cities), (regions)
		});

		autocomplete.addListener("place_changed", () => {
			const place = autocomplete.getPlace();

			if (!place?.geometry?.location)
				return ToasterService.showError(
					`No details available for input: '${place.name}'`
				);

			let city;
			let airport = false;
			const location = place.geometry.location;
			const geometry = {
				location: { lat: location.lat(), lng: location.lng() },
			};

			place.address_components.every(({ types, long_name }: any) => {
				if (types.includes("locality")) {
					city = long_name;
					return false;
				}
				return true;
			});

			if (place.types.includes("airport")) airport = true;
			if (!city)
				ToasterService.showError("Address does not contain city!");

			handleChange({
				value: place.formatted_address,
				details: { ...place, city, airport, geometry },
			});
		});

		isInit.current = true;
	});

	return (
		<Input
			inputRef={ref}
			placeholder={`Enter ${rest.label} Location`}
			{...rest}
			value={val?.value || ""}
			label={val?.details?.name || rest.label}
			onChange={(e) => handleChange({ value: e.target.value })}
			onKeyDown={(e) => {
				rest.onKeyDown?.(e);
				if (e.key === "Enter") e.preventDefault();
			}}
		/>
	);
}
