import React from "react";
import PagePath from "domains/pagePath/PagePath";
import DotoriTemplate from "domains/dotori/components/desktop/DotoriTemplate";
import Reminder from "domains/dotori/components/desktop/Reminder";
import { useLocation, useParams } from "react-router-dom";
import Path from "routes/Path";
import ChildFolders from "domains/dotori-folder/containers/ChildFoldersContainer";

function DotoriPage() {
  const { folderId } = useParams();
  const location = useLocation();
  const path = folderId ? "folder" : "main";

  return (
    <>
      {location.pathname === Path.DotoriPage && <Reminder />}
      <PagePath path={path} folderId={folderId} />
      {path === "folder" && folderId && <ChildFolders folderId={folderId} />}
      <DotoriTemplate path={path} folderId={folderId} />
    </>
  );
}

export default DotoriPage;
