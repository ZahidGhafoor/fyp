import { InputLabel } from "@mui/material";
import { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "code-block",
];

export default function TextEditor({
  label,
  input,
  handleBlur,
  handleFocus,
  meta: { error, touched },
  ...rest
}: any) {
  const isSet = useRef(false);

  useEffect(() => {
    if (!input.value || isSet.current) return;

    input.onChange(input.value.replaceAll("&lt;", "<"));

    isSet.current = true;
  }, [input]);

  return (
    <>
      <InputLabel shrink htmlFor={rest.name} sx={{ fontWeight: "bold" }}>
        {label}
      </InputLabel>
      <ReactQuill
        id={rest.name}
        error={touched && error}
        {...rest}
        theme="snow"
        onChange={(html) => {
          input.onChange(html);
        }}
        value={input.value}
        defaultValue={input.value}
        formats={formats}
        modules={modules}
      />
    </>
  );
}
