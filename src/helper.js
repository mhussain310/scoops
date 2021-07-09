export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

export const removeSource = (str) => {
  const arr = str
    .split(" - ")
    .map((el, i, arr) => {
      if (`${arr[i + 1]}`.toLowerCase() === `${el}`.toLowerCase()) return "";
      return el;
    })
    .filter((el) => el !== "");

  return arr.slice(0, -1).join(" - ");
};

export const removeTLD = (str) => {
  const index = str.indexOf(".");
  return index === -1 ? str : str.slice(0, index);
};

export const removeUnknownChars = (str) => {
  if (!str) return;
  const index = str.lastIndexOf("[");
  const modifiedString = index === -1 ? str : str.slice(0, index);
  return modifiedString.replace(/(&quot;)/g, "'");
};

export const parseISOString = (str) => {
  const b = str.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

export const timeAgo = (date) => {
  const parsedDate = parseISOString(date);

  let seconds = Math.floor((Date.now() - parsedDate) / 1000);
  let unit = "second";
  let direction = "ago";
  if (seconds < 0) {
    seconds = -seconds;
    direction = "from now";
  }
  let value = seconds;
  if (seconds >= 31536000) {
    value = Math.floor(seconds / 31536000);
    unit = "year";
  } else if (seconds >= 2628000) {
    value = Math.floor(seconds / 2628000);
    unit = "month";
  } else if (seconds >= 604800) {
    value = Math.floor(seconds / 604800);
    unit = "week";
  } else if (seconds >= 86400) {
    value = Math.floor(seconds / 86400);
    unit = "day";
  } else if (seconds >= 3600) {
    value = Math.floor(seconds / 3600);
    unit = "hour";
  } else if (seconds >= 60) {
    value = Math.floor(seconds / 60);
    unit = "minute";
  }
  if (value !== 1) unit = unit + "s";
  return value + " " + unit + " " + direction;
};

export const fmtDate = (date, options) => {
  const datePublished = parseISOString(date);
  return new Intl.DateTimeFormat(navigator.language, options).format(
    datePublished
  );
};

export const checkAuthor = (author, source) => {
  if (!author) return source;
  if (author.includes(".")) return source;
  const authorName = author
    .replaceAll("\n", " ")
    .split(" ")
    .filter((el) => `${el}`.toLowerCase() !== "by")
    .join(" ");

  return authorName;
};

export const titleToAlphaNumeric = (title, date) => {
  const alphaTitle = title
    .split(" ")
    .map((word) => word.toLowerCase().replace(/[^0-9a-z]/gi, ""))
    .filter((word) => word !== "")
    .join("-");

  const timestamp = parseISOString(date).getTime();
  return `${alphaTitle}-${timestamp}`;
};

export const capitaliseFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
