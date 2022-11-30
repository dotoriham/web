import { useInput, useToast, useToggle } from "domains/@shared/hooks";
import { getMetaDataByUrl } from "lib/utils/getMetaData";
import React, { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import DotoriAddButton from "../components/mobile/DotoriAddButton";
import DotoriAddModal from "../components/mobile/DotoriAddModal";
import { addDotoriAPI } from "../apis/dotori";
import { DOTORI_LIST_QUERY_KEY } from "../utils/queryKey";
import { getCrawlingData } from "../apis";
import { defaultDotoriAddFormState } from "../utils/constants";
import { useParams } from "react-router-dom";
import { DotoriAddRequest } from "types/dotori";

function MobileDotoriAddContainer() {
  const [isModal, onToggleModal] = useToggle(false);
  const [linkValue, onChangeLinkValue, setLinkValue] = useInput("");
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { folderId = "" } = useParams<"folderId">();
  const { errorToast } = useToast();

  const { mutate: mutateAddDotori } = useMutation(
    (requestData: DotoriAddRequest) => addDotoriAPI(requestData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(DOTORI_LIST_QUERY_KEY);
      },
      onError: (e) => {
        errorToast(e as string);
      },
      onSettled: () => {
        setLinkValue("");
        setIsLoading(false);
        onToggleModal();
      },
    }
  );

  const getMetaData = useCallback(async () => {
    try {
      const htmlData = await getCrawlingData(linkValue);
      const metaData = await getMetaDataByUrl(htmlData.html, linkValue);
      return {
        ...defaultDotoriAddFormState,
        description: metaData?.description ?? "",
        image: metaData?.image ?? "",
        title: metaData?.title ?? "",
        link: metaData?.url ?? "",
      };
    } catch (e) {
      return {
        ...defaultDotoriAddFormState,
        link: linkValue,
      };
    }
  }, [linkValue]);

  const onSaveDotoriForm = useCallback(async () => {
    setIsLoading(true);
    const form = await getMetaData();
    mutateAddDotori({ folderId, addBookmarkList: [form] });
  }, [getMetaData, mutateAddDotori, folderId]);

  return (
    <>
      <DotoriAddButton onClick={onToggleModal} />
      <DotoriAddModal
        isOpen={isModal}
        onClose={onToggleModal}
        value={linkValue}
        onChangeValue={onChangeLinkValue}
        onSubmit={onSaveDotoriForm}
        isLoading={isLoading}
      />
    </>
  );
}

export default MobileDotoriAddContainer;
