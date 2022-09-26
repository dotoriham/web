import { ItemId } from "@atlaskit/tree";
import { DotoriSortType } from "domains/@shared/models";
import client from "lib/api/client";
import { DotoriList } from "types/dotori";

interface RequestData {
  page: number;
  size: number;
  sort: DotoriSortType;
  remind: boolean;
  folderId: ItemId;
}

type ResponseData = DotoriList;

export const getDotoriList = async (requestData: RequestData) => {
  const { page, remind, size, sort, folderId } = requestData;
  const response = await client.get<ResponseData>(
    `/api/v1/page/${folderId}?page=${page}&size=${size}&sort=${sort}&remind=${remind}`
  );
  return response.data;
};
