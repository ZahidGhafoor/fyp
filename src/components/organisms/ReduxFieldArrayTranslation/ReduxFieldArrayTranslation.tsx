import { Fragment, useEffect } from "react";
import ReduxFormFields, {
  languageMapper,
  LanguageType,
} from "components/molecules/ReduxFormFields";

export default function ReduxFieldArrayTranslation({
  fields,
  fieldsArray,
  FieldsProps,
}: any) {
  useEffect(() => {
    const languages: LanguageType[] = FieldsProps?.languages || [
      "en",
      "de",
      "tr",
    ];
    languages.forEach((lang) => {
      fields.push({ lang });
    });
  }, []);

  return (
    <>
      {fields.map((member: string, index: number) => (
        <Fragment key={index}>
          {FieldsProps?.showLabelInHeading && (
            <h3>{languageMapper[fields.get(index).lang as LanguageType]}</h3>
          )}
          <ReduxFormFields
            member={member}
            fields={
              FieldsProps?.showLabelInHeading
                ? [...fieldsArray]
                : fieldsArray.map((el: any) => {
                    if (el.name === "translation")
                      return {
                        ...el,
                        label: `${el.label} (${
                          languageMapper[fields.get(index).lang as LanguageType]
                        })`,
                      };

                    return el;
                  })
            }
          />
        </Fragment>
      ))}
    </>
  );
}
