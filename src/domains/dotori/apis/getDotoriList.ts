import { DotoriSortType } from "domains/@shared/models";
import client from "lib/api/client";
import { DotoriList } from "types/dotori";

interface RequestData {
  page: number;
  size: number;
  sort: DotoriSortType;
  remind: boolean;
}

type ResponseData = DotoriList;

export const getDotoriList = async (requestData: RequestData) => {
  const { page, remind, size, sort } = requestData;
  const response = await client.get<ResponseData>(
    `/api/v1/page/main?page=${page}&size=${size}&sort=${sort}&remind=${remind}`
  );
  return response.data;
};
