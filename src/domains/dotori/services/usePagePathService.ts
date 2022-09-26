import { ItemId } from "@atlaskit/tree";
import { getParentFolderListAPI } from "lib/api/folder";
import { useQuery } from "react-query";

export default function usePagePathService(folderId: ItemId) {
  const { data: pagePath = "" } = useQuery(
    ["mobile/pagePath", folderId],
    () => getParentFolderListAPI(folderId),
    {
      cacheTime: 5 * 60 * 1000,
      staleTime: 5 * 60 * 1000,
      retry: false,
      select: (data) => {
        let convertPathPath = "";
        data.forEach((item, index) => {
          if (data.length > 2) {
            if (index === 0) {
              convertPathPath = item.name;
            } else if (index === data.length - 1) {
              convertPathPath = `${convertPathPath} / ... / ${item.name}`;
            }
          } else {
            if (index === 0) {
              convertPathPath = item.name;
            } else {
              convertPathPath = `${convertPathPath} / ${item.name}`;
            }
          }
        });
        return convertPathPath;
      },
    }
  );

  return { pagePath };
}
