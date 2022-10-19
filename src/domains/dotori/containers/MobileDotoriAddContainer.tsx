import axios from "axios";
import { useInput, useToggle } from "domains/@shared/hooks";
import { CRAWLING_SERVER_URL } from "lib/constants";
import { getMetaDataByUrl } from "lib/utils/getMetaData";
import React, { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useQueryClient } from "react-query";
import DotoriAddButton from "../components/mobile/DotoriAddButton";
import DotoriAddModal from "../components/mobile/DotoriAddModal";
import { addDotoriAPI } from "../apis/dotori";
import { DOTORI_LIST_QUERY_KEY } from "../utils/queryKey";

const defaultDotoriAddFormState = {
  id: uuidv4(),
  link: "",
  title: "",
  remind: true,
  description: "",
  image: "",
};

function MobileDotoriAddContainer() {
  const [isModal, onToggleModal] = useToggle(false);
  const [linkValue, onChangeLinkValue] = useInput("");
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const getCrawlingData = async (value: string) => {
    const { data } = await axios.post(CRAWLING_SERVER_URL, {
      url: value,
    });
    return data;
  };

  const onSaveDotoriForm = useCallback(async () => {
    setIsLoading(true);
    try {
      const htmlData = await getCrawlingData(linkValue);
      const metaData = await getMetaDataByUrl(htmlData.html, linkValue);
      const form = {
        ...defaultDotoriAddFormState,
        description: metaData?.description || "",
        image: metaData?.image || "",
        title: metaData?.title || "",
        link: metaData?.url || "",
      };
      await addDotoriAPI({ folderId: "", addBookmarkList: [form] });
      queryClient.invalidateQueries(DOTORI_LIST_QUERY_KEY);
      setIsLoading(false);
      onToggleModal();
    } catch (e) {
      console.log(e);
    }
  }, [linkValue, onToggleModal, queryClient]);

  return (
    <div>
      <DotoriAddButton onClick={onToggleModal} />
      <DotoriAddModal
        isOpen={isModal}
        onClose={onToggleModal}
        value={linkValue}
        onChangeValue={onChangeLinkValue}
        onSubmit={onSaveDotoriForm}
        isLoading={isLoading}
      />
    </div>
  );
}

export default MobileDotoriAddContainer;
