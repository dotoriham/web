import { useInput, useToggle } from "domains/@shared/hooks";
import React from "react";
import DotoriAddButton from "../components/mobile/DotoriAddButton";
import DotoriAddModal from "../components/mobile/DotoriAddModal";

function MobileDotoriAddContainer() {
  const [isModal, onToggleModal] = useToggle(false);
  const [url, onChangeUrl] = useInput("");

  return (
    <div>
      <DotoriAddButton onClick={onToggleModal} />
      <DotoriAddModal
        isOpen={isModal}
        onClose={onToggleModal}
        value={url}
        onChangeValue={onChangeUrl}
      />
    </div>
  );
}

export default MobileDotoriAddContainer;
