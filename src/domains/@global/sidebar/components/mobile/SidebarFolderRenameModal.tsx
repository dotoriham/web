import { Button, Input } from "components";
import { DrawerModal } from "domains/@shared/components";
import { palette } from "lib/styles";
import React, { useState } from "react";
import { EmojiObject, EmojiPicker } from "react-twemoji-picker";
import styled from "styled-components";
import useRenameFolder from "../../hooks/useRenameFolder";
import EmojiData from "react-twemoji-picker/data/twemoji.json";
import { ItemId } from "@atlaskit/tree";
import { SidebarFolderEmoji } from ".";

interface Props {
  isOpen: boolean;
  onClose(): void;
  isSelectedFolderId: ItemId;
}

function SidebarFolderRenameModal({
  isOpen,
  onClose,
  isSelectedFolderId,
}: Props) {
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const {
    newFolderEmoji,
    newFolderName,
    onChangeFolderName,
    onChangeFolderEmoji,
    mutateRenameFolder,
  } = useRenameFolder(isSelectedFolderId);

  const emojiData = Object.freeze(EmojiData);

  const onEmojiSelect = (emoji: EmojiObject) => {
    setEmojiPickerVisible(!emojiPickerVisible);
    onChangeFolderEmoji(emoji);
  };

  const onToggleEmojiPicker = (
    e: React.MouseEvent<HTMLDivElement>,
    isEmojiPickerVisible: boolean
  ) => {
    e.stopPropagation();
    setEmojiPickerVisible(isEmojiPickerVisible);
  };

  const onSubmitFolderRename = async () => {
    mutateRenameFolder();
    onClose();
  };

  return (
    <DrawerModal isOpen={isOpen} onClose={onClose} title="보관함 이름 변경">
      <Container>
        <RenameForm>
          <EmojiBox
            onClick={(e) => onToggleEmojiPicker(e, !emojiPickerVisible)}
          >
            <SidebarFolderEmoji emoji={newFolderEmoji.unicode} />
          </EmojiBox>

          <FolderNameInput
            type="text"
            width="100%"
            height="44px"
            borderRadius="8px"
            value={newFolderName}
            onChange={onChangeFolderName}
          />
          {emojiPickerVisible && (
            <EmojiPickerContainer>
              <EmojiPicker
                emojiData={emojiData}
                onEmojiSelect={onEmojiSelect}
              />
            </EmojiPickerContainer>
          )}
        </RenameForm>

        <Button
          width="100%"
          height="52px"
          variant="primary"
          onClick={onSubmitFolderRename}
        >
          변경
        </Button>
      </Container>
    </DrawerModal>
  );
}

const Container = styled.div`
  margin-top: 25px;
  > button {
    font-size: 16px;
  }
`;

const RenameForm = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  position: relative;
`;

const EmojiBox = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${palette.grayLight};
  cursor: pointer;
  margin-right: 8px;
  flex-shrink: 0;
`;

const FolderNameInput = styled(Input)`
  font-size: 14px;
  line-height: 1.57;
  color: ${palette.grayDarkest};
  margin-right: 4px;
`;

const EmojiPickerContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
`;

export default SidebarFolderRenameModal;
