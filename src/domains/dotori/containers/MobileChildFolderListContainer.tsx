import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ChildFolderList } from "../components/mobile";
import useChildFolderListService from "../services/useChildFolderListService";

function MobileChildFolderListContainer() {
  const { folderId = "" } = useParams<"folderId">();

  const { data } = useChildFolderListService(folderId);

  if (!data || !data.length) {
    return null;
  }

  return (
    <>
      <Container>
        <Title>폴더</Title>
        <ChildFolderList childFolders={data || []} />
      </Container>
      <SectionDivider />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-bottom: 16px;
`;

const SectionDivider = styled.div`
  height: 12px;
  margin: 0 -16px;
  background-color: #f3f3f3;
`;

export default MobileChildFolderListContainer;
