import { useInfiniteQuery } from "react-query";
import { getDotoriList } from "../apis";
import { DOTORI_LIST_QUERY_KEY } from "../utils/queryKey";

type PageParam = Partial<{ page: number }>;

export default function useInfiniteDotoriListService(
  params: Parameters<typeof getDotoriList>[0]
) {
  const query = useInfiniteQuery(
    [DOTORI_LIST_QUERY_KEY, params],
    ({ pageParam }) =>
      getDotoriList({
        ...params,
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

  return query;
}
