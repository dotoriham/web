import { ItemId } from "@atlaskit/tree";

export interface IDotori {
  clickCount: number;
  deleteTime: string;
  deleted: boolean;
  description: null | string;
  nickname?: string;
  folder?: string;
  folderId: ItemId;
  id: string;
  link: string;
  remindTime: null | string;
  saveTime: string;
  title: string;
  userId: number;
  image: string;
  folderName: string;
  folderEmoji: string;
}

export interface IDotoriItem extends IDotori {
  checked: boolean;
}

export type DotoriPageableType = {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  unpaged: boolean;
};

export interface IDotoriListResponse {
  content: IDotori[];
  empty: boolean;
  first: true;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: DotoriPageableType;
  size: number;
  sort: DotoriSortType;
  totalElements: number;
  totalPages: number;
}

export type DotoriSortType =
  | "saveTime,desc"
  | "saveTime,asc"
  | "clickCount,desc"
  | "clickCount,asc";