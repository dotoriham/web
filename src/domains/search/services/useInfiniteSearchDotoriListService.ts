import { ReactQueryKey } from "lib/queryKey";
import { useInfiniteQuery } from "react-query";
import { getSearchDotoriList } from "../apis";
import { useSearchQueryParams } from "../hooks";

type PageParam = Partial<{ page: number }>;

const SearchDotoriListSize = 12;

export default function useInfiniteSearchDotoriListService() {
  const { keyword, page, remind, sort } = useSearchQueryParams();

  return useInfiniteQuery(
    ReactQueryKey.dotoriContents("search", keyword, page, remind, sort),
    ({ pageParam }) =>
      getSearchDotoriList({
        keyword,
        remind,
        sort,
        size: SearchDotoriListSize,
        page: (pageParam as PageParam)?.page || 0,
      }),
    {
      enabled: !!keyword,
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
