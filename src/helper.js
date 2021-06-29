import moment from "moment";

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

  // const arr = str.split(" - ");
  // const newArr = [...new Set(arr)];
  // return newArr.slice(0, -1).join(" - ");
};

export const removeTLD = (str) => {
  const index = str.indexOf(".");
  return index === -1 ? str : str.slice(0, index);
};

export const removeChar = (str) => {
  if (!str) return;
  const index = str.lastIndexOf("[");
  return str.slice(0, index);
};

export const timeAgo = (date) => {
  return moment(date).fromNow();
};

export const parseISOString = (str) => {
  const b = str.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
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
    .map((word) => word.toLowerCase().replace(/\W/g, ""))
    .join("-");

  const timestamp = parseISOString(date).getTime();
  return `${alphaTitle}-${timestamp}`;
};
