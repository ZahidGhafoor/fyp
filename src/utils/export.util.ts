import XLSX from "xlsx";

export const exportTable = (
	data: any[],
	options: any,
	file_name: String
) => {
	var sheet_data: any = [];

	for (const el of data) {
		let obj: any = {};
		for (const key in options) {
			if (Object.prototype.hasOwnProperty.call(options, key)) {
				const element = options[key];
				if (element) obj[key] = el[key];
			}
		}
		sheet_data.push(obj);
	}

	const worksheet = XLSX.utils.json_to_sheet(sheet_data);
	const workbook = XLSX.utils.book_new();

	XLSX.utils.book_append_sheet(workbook, worksheet, "data");
	XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
	XLSX.writeFile(workbook, `${file_name}.xlsx`);
};
