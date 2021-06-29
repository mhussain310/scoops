import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    h: "1 hour",
    d: "1 day",
    y: "1 year",
  },
});

moment.relativeTimeThreshold("ss", 58);
moment.relativeTimeThreshold("s", 59);
moment.relativeTimeThreshold("m", 59);
moment.relativeTimeThreshold("h", 23);

export const DATE_OPTIONS = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
  timeZoneName: "short",
};

export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 13;
