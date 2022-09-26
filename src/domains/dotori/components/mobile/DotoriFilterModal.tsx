import { MobileModalTemplate } from "components";
import { useDotoriQueryParams } from "domains/dotori/hooks";
import { mergeQsParserWithSortKeys } from "domains/dotori/utils";
import { DOTORI_FILTER_MENUS } from "domains/dotori/utils/constants";
import { palette } from "lib/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function DotoriFilterModal({ isOpen, onClose }: Props) {
  const navigate = useNavigate();
  const { remind, sort } = useDotoriQueryParams();

  return (
    <MobileModalTemplate isOpen={isOpen} onClose={onClose}>
      {DOTORI_FILTER_MENUS.map(({ label, text }) => (
        <Item
          onClick={() => {
            navigate({
              search: mergeQsParserWithSortKeys({
                remind,
                sort: label,
              }),
            });
            onClose();
          }}
          key={text}
          isActive={sort === label}
        >
          {text}
        </Item>
      ))}
    </MobileModalTemplate>
  );
}

const Item = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 0 18px 0 22px;
  color: ${palette.grayDarker};
  ${({ isActive }) => isActive && "font-weight: 700;"};
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
  font-size: 14px;
`;

export default DotoriFilterModal;
