const isServer = typeof window === "undefined";
let userAgent = isServer ? "" : window.navigator.userAgent.toLowerCase();

/**
 * user-agent 정보를 이용하여 단순 모바일인지 여부를 확인한다.
 *
 * 모바일 기종: 안드로이드 계열 전 기종, ios 를 사용하는 모든 기종 (아이폰, 아이패드, 아이팟 등)
 */
export function isMobile() {
  const ua = userAgent;

  if (!ua) {
    return false;
  }

  return /iphone|ipod|android/gi.test(ua);
}
