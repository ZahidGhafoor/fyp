import { InputProps } from "../Input";

export { default } from "./FileUpload";

export interface FileUploadOwnProps {
	maxSize?: number;
	accept?: string[];
}

export type FileUploadProps = FileUploadOwnProps & InputProps;
