import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MobileHeaderState, setMobileHeader } from "stores/mobileHeader";

type Props = MobileHeaderState;

export default function useMobileHeader({
  isShowRightMenu,
  leftMenu,
  title,
  searchBar,
}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMobileHeader({ isShowRightMenu, leftMenu, title, searchBar }));
  }, [dispatch, isShowRightMenu, leftMenu, title, searchBar]);
}
