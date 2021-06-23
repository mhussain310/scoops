import moment from "moment";

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

export const removeSource = (str) => {
  const arr = str.split(" - ");
  const newArr = [...new Set(arr)];
  return newArr.slice(0, -1).join(" - ");
};

export const removeTLD = (str) => {
  const index = str.indexOf(".");
  return index === -1 ? str : str.slice(0, index);
};

export const timeAgo = (date) => {
  return moment(date).fromNow();
};
