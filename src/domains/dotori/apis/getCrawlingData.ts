import axios from "axios";
import { CRAWLING_SERVER_URL } from "lib/constants";

export const getCrawlingData = async (value: string) => {
  const { data } = await axios.post(CRAWLING_SERVER_URL, {
    url: value,
  });
  return data;
};
