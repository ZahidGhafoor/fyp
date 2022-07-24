import Button from "components/atoms/Button";
import ReduxFormFields from "components/molecules/ReduxFormFields";
import FieldArrayHeading from "components/molecules/FieldArrayHeading";
import { useEffect } from "react";
export default function ReduxFieldArray({
	fields,
	label,
	fieldsArray,
}: any) {
	useEffect(() => fields.push({}));
	return (
		<>
			<h2>{label}s</h2>
			{fields.map((member: string, index: number) => (
				<div key={index}>
					<FieldArrayHeading
						index={index}
						heading={label}
						fieldsLength={fields.length}
						onClick={() => fields.remove(index)}
					/>
					<ReduxFormFields member={member} fields={fieldsArray} />
				</div>
			))}
			<Button type="button" onClick={() => fields.push({})}>
				Add More {label}
			</Button>
		</>
	);
}
