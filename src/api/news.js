import axios from "axios";
import { timeout } from "../helper";
import { TIMEOUT_SEC } from "../config";

const apiClient = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
});

const AJAX = async function (url) {
  try {
    const fetchPro = apiClient.get(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    if (res.status !== 200)
      throw new Error(`Failed to load articles. ${res.status}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export default AJAX;
