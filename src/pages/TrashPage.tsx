import PagePath from "domains/pagePath/PagePath";
import DotoriTemplate from "domains/dotori/components/desktop/DotoriTemplate";
import React from "react";

function TrashPage() {
  return (
    <>
      <PagePath path="trash" />
      <DotoriTemplate path="trash" />
    </>
  );
}

export default TrashPage;
