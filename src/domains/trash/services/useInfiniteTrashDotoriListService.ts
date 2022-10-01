import { useInfiniteQuery } from "react-query";
import { getTrashDotoriList } from "../apis";
import { TRASH_DOTORI_LIST_QUERY_KEY } from "../utils";

type PageParam = Partial<{ page: number }>;

const TrashDotoriListSize = 12;

export default function useInfiniteTrashDotoriListService() {
  return useInfiniteQuery(
    [TRASH_DOTORI_LIST_QUERY_KEY],
    ({ pageParam }) =>
      getTrashDotoriList({
        remind: false,
        sort: "saveTime,desc",
        size: TrashDotoriListSize,
        page: (pageParam as PageParam)?.page || 0,
      }),
    {
      cacheTime: 60000,
      getNextPageParam: ({ last, number }) => {
        if (last) return undefined;

        return {
          page: number + 1,
        };
      },
      keepPreviousData: true,
      staleTime: 60000,
    }
  );
}
