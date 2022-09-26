import { ItemId } from "@atlaskit/tree";
import { getChildFolderListAPI } from "lib/api/folder";
import { useQuery } from "react-query";

export default function useChildFolderListService(folderId: ItemId) {
  return useQuery(
    ["mobile/childFolderList", folderId],
    () => getChildFolderListAPI(folderId),
    {
      cacheTime: 5 * 60 * 1000,
      staleTime: 5 * 60 * 1000,
    }
  );
}
