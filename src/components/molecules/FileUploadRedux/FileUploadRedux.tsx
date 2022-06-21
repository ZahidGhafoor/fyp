import CircleLoader from "components/atoms/CircleLoader";
import FileUpload from "components/atoms/FileUpload";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import ImageService from "services/image.service";

export default function FileUploadRedux({
  input,
  handleBlur,
  handleFocus,
  FileUploadProps,
  meta: { error, touched, invalid },
  ...rest
}: any) {
  const dispatch = useAppDispatch();

  return (
    <FileUpload
      {...FileUploadProps}
      {...rest}
      {...input}
      helperText={touched && invalid && error}
      error={touched && invalid && error && true}
      onChange={async (file: any) => {
        if (file) {
          if (file.error) return input.onChange(file);

          const formData = new FormData();

          formData.append("file", file);

          const [success] = await ImageService.upload(formData, dispatch);
          if (success) {
            const images = success.data.data;

            input.onChange({
              images,
              name: file.name,
              type: file.type,
              blob: URL.createObjectURL(file),
            });
          } else input.onChange("");
        } else input.onChange("");
      }}
      onBlur={(e) => {
        handleBlur?.(e);
        e.preventDefault();
      }}
      onFocus={(e) => {
        handleFocus?.(e);
        e.preventDefault();
      }}
    />
  );
}
