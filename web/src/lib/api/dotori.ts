import { ItemId } from "@atlaskit/tree";
import { DotoriSortType, IDotoriListResponse } from "types/dotori";
import client from "./client";

// 휴지통 북마크 조회
export const getTrashDotorisAPI = async (
  page: number,
  size: number,
  sort: DotoriSortType,
  remind: boolean
) => {
  const response = await client.get<IDotoriListResponse>(
    `/api/v1/page/trash?page=${page}&size=${size}&sort=${sort}&remind=${remind}`
  );
  return response.data;
};

// 검색 결과 북마크 조회
export const getSearchDotorisAPI = async (
  keyword: string,
  page: number,
  size: number,
  sort: DotoriSortType,
  remind: boolean
) => {
  const response = await client.get<IDotoriListResponse>(
    `/api/v1/page/search/${keyword}?page=${page}&size=${size}&sort=${sort}&remind=${remind}`
  );
  return response.data;
};

// 북마크 조회  folderId가 main 이면 모든 북마크 조회
export const getDotorisAPI = async (
  folderId: ItemId,
  page: number,
  size: number,
  sort: DotoriSortType,
  remind: boolean
) => {
  const response = await client.get<IDotoriListResponse>(
    `/api/v1/page/${folderId}?page=${page}&size=${size}&sort=${sort}&remind=${remind}`
  );
  return response.data;
};