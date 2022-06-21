import { useEffect, useRef, useState } from "react";

import "./AutoComplete.css";
import Input from "../Input";
import { InputProps } from "../Input";
import HighlightText from "../HighlightText";
import ToasterService from "utils/toaster.util";
import { AutoCompletesOwnProps, Suggestion } from ".";
import LocationOnIcon from "@mui/icons-material/LocationOn";

let googleMapsLoaded = false;
let google = (window as any).google;

export type AutoCompletesProps = AutoCompletesOwnProps & InputProps;

export default function Autocomplete({
	onChange,
	...rest
}: AutoCompletesProps) {
	let ref: any = useRef(null);
	let timeout: any = useRef();
	let isSelected = useRef(false);
	let sessionToken: any = useRef(null);
	let value = `${rest.value ? rest.value : ""}`;

	const [show, setShow] = useState(false);
	const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

	useEffect(() => {
		if (value === "" && suggestions.length > 0) setSuggestions([]);
	}, [value, suggestions]);

	useEffect(() => {
		const mousedown = (e: any) => {
			if (ref.current && !ref.current.contains(e.target)) setShow(false);
		};

		document.addEventListener("mousedown", mousedown);
		return () => document.removeEventListener("mousedown", mousedown);
	}, []);

	useEffect(() => {
		google = (window as any).google;

		if (!googleMapsLoaded && google) {
			googleMapsLoaded = true;
			sessionToken.current =
				new google.maps.places.AutocompleteSessionToken();
		}

		if (!value || value === "" || !googleMapsLoaded) return;
		if (isSelected.current) {
			isSelected.current = false;
			return;
		}

		clearTimeout(timeout.current);

		timeout.current = setTimeout(async () => {
			let autocompleteService =
				new google.maps.places.AutocompleteService();

			const res = await autocompleteService.getPlacePredictions({
				input: value,
				sessionToken: sessionToken.current,
			});

			setSuggestions(res.predictions);
		}, 200);
	}, [value]);

	const handleSuggestion = async ({
		place_id,
		description,
	}: Suggestion) => {
		if (value === description) return setShow(false);

		onChange({ value: description });

		google = (window as any).google;

		var place = document.getElementById("place");
		let placesService = new google.maps.places.PlacesService(place);
		const request = {
			placeId: place_id,
			sessionToken: sessionToken.current,
			fields: [
				"url",
				"name",
				"types",
				"place_id",
				"formatted_address",
				"geometry.location",
				"address_components",
			],
		};

		const callback = (result: any, status: any) => {
			if (status !== "OK") return ToasterService.showError(status);

			sessionToken.current =
				new google.maps.places.AutocompleteSessionToken();

			setShow(false);
			isSelected.current = true;

			onChange({
				value: description,
				details: {
					url: result.url,
					title: result.name,
					types: result.types,
					address: result.formatted_address,
					coordinates: {
						lat: result.geometry.location.lat(),
						lng: result.geometry.location.lng(),
					},
					address_components: result.address_components,
				},
			});
		};

		placesService.getDetails(request, callback);
	};

	return (
		<div ref={ref} className="suggestions">
			<Input
				{...rest}
				value={value}
				autoComplete="off"
				onFocus={() => setShow(true)}
				onChange={(e) => onChange({ value: e.target.value })}
			/>
			{show && (
				<div className="container">
					<ul>
						{suggestions.map((suggestion, index) => (
							<li key={index} onClick={() => handleSuggestion(suggestion)}>
								<div>
									<LocationOnIcon />
									<HighlightText
										highlight={value}
										text={suggestion.description}
									/>
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
