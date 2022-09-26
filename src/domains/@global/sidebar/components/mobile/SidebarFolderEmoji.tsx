import { FolderIcon } from "assets/icons";
import React from "react";
import { Emoji } from "react-twemoji-picker";
import styled from "styled-components";

interface FolderEmojiProps {
  emoji?: string;
}

function FolderEmoji({ emoji }: FolderEmojiProps) {
  return (
    <>
      {emoji ? (
        <EmojiIcon emoji={{ name: "emoji", unicode: emoji }} />
      ) : (
        <FolderIconStyled />
      )}
    </>
  );
}

const FolderIconStyled = styled(FolderIcon)`
  width: 24px;
  height: 24px;
`;

const EmojiIcon = styled(Emoji)`
  width: 24px;
  height: 24px;
`;

export default FolderEmoji;
