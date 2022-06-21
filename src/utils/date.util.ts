import moment from "moment";

const DateService = {
  getDateRange: (value: any) => {
    return [
      value[0] ? new Date(value[0]).toString() : "",
      value[1] ? new Date(value[1]).toString() : "",
    ];
  },

  getDateString: (value: any) => {
    return value
      ? moment(value.replace("Z", "")).format("ddd DD MMM YYYY")
      : "";
  },

  getTimeString: (value: any) => {
    return value ? moment(value.replace("Z", "")).format("HH:mm") : "";
  },

  getDateTimeString: (value: any) => {
    return value
      ? moment(value.replace("Z", "")).format("ddd DD MMM YYYY, HH:mm")
      : "";
  },

  getFormattedDate: (value: any) => {
    return value
      ? new Date(value).toLocaleDateString(undefined, {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";
  },

  getFormattedDateTime: (value: any) => {
    return value
      ? new Date(value).toLocaleDateString(undefined, {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })
      : "";
  },
};
export default DateService;
