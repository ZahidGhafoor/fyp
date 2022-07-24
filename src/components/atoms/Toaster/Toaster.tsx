import { useSnackbar } from "notistack";
import ToasterService from "utils/toaster.util";
import { useEffect } from "react";

export default function Toaster() {
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		const success = (msg: string) =>
			msg && enqueueSnackbar(msg, { variant: "success" });

		const error = (msg: string) =>
			msg && enqueueSnackbar(msg, { variant: "error" });

		ToasterService.subscribe(success, error);
	});

	return null;
}
