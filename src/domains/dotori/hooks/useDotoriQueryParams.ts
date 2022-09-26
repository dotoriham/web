import { useQueryString } from "domains/@shared/hooks";
import { DotoriSortType } from "domains/@shared/models";

interface QueryParams {
  page: number;
  sort: DotoriSortType;
  remind: boolean;
}

export default function useDotoriQueryParams() {
  const {
    page = 0,
    remind = false,
    sort = "saveTime,desc",
  } = useQueryString<QueryParams>();

  return {
    page: Number(page),
    remind:
      typeof remind === "string" ? (JSON.parse(remind) as boolean) : remind,
    sort,
  };
}
