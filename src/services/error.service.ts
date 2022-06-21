import ToasterService from "utils/toaster.util";

const ErrorService = {
	init: () => {
		window.addEventListener("error", (e: any) => {
			ToasterService.showError(e.message);
		});

		window.addEventListener("unhandledrejection", (e: any) => {
			ToasterService.showError(e.message);
		});
	},
};

export default ErrorService;
