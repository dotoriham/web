import { breakpoints } from "lib/styles";
import React, { createContext, ReactNode, useEffect, useState } from "react";

import { isMobile } from "../utils/user-agent.util";

interface Props {
  children: ReactNode;
}

const isServer = typeof window === "undefined";

function getIsMobile(): boolean {
  if (isServer) {
    try {
      return isMobile();
    } catch (error) {
      //
    }
    return false;
  }

  return isMobile() || window.innerWidth < breakpoints.medium;
}

export const DeviceDetectContext = createContext({
  mobile: getIsMobile(),
});

/**
 * 컨텍스트: UserAgent 및 Resizing 여부에 따른 태블릿/모바일 여부를 판별 해 준다.
 *
 * 지정된 곳 이외에서는 사용치 않는다.
 *
 * 내부적으로 window.mediaQuery API를 사용한다.
 *
 * @see https://stackoverflow.com/questions/29046324/whats-the-most-reliable-way-to-integrate-javascript-with-media-queries
 * @see https://jsperf.com/matchmedia-vs-resize/3
 * @see https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
 */
export const DeviceDetectProvider = ({ children }: Props) => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    if (isServer) {
      return;
    }

    const mqMobile = window.matchMedia(
      `screen and (max-width: ${breakpoints.medium - 1}px)`
    );

    const handleResizeForMobile = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mqMobile.addEventListener("change", handleResizeForMobile);

    return () => {
      mqMobile.removeEventListener("change", handleResizeForMobile);
    };
  }, []);

  return (
    <DeviceDetectContext.Provider
      value={{
        mobile: isMobile,
      }}
    >
      {children}
    </DeviceDetectContext.Provider>
  );
};
