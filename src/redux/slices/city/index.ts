import { SelectOption } from "components/atoms/Select";

export interface ZipCodeState {
  cities: any[];
  city: any;
  loading: boolean;
	cityOptions: SelectOption[];
}
