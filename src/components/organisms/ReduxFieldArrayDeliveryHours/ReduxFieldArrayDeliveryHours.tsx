import { days } from ".";
import { Fragment, useEffect } from "react";
import ReduxFormFields from "components/molecules/ReduxFormFields";
export default function ReduxFieldArrayDeliveryHours({
  fields,
  fieldsArray,
}: any) {
  useEffect(() => {
    days.forEach((day) => {
      fields.push({ day, isOpen: true });
    });
  }, []);
  return (
    <>
      {fields.map((member: string, index: number) => (
        <Fragment key={index}>
          <h3>{fields.get(index).day}</h3>
          <ReduxFormFields member={member} fields={fieldsArray} />
        </Fragment>
      ))}
    </>
  );
}
