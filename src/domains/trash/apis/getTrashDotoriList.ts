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

/**
 * 휴지통 도토리 리스트 조회
 */
export const getTrashDotoriList = async (requestData: RequestData) => {
  const { page, remind, size, sort } = requestData;

  const response = await client.get<ResponseData>(
    `/api/v1/page/trash?page=${page}&size=${size}&sort=${sort}&remind=${remind}`
  );

  return response.data;
};
