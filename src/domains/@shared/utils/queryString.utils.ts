import qs from "qs";

/**
 * qs.parse 의 alias 함수
 *
 * 다른점이라면, 앞의 ? 가 있을 시 제거하고 수행한다.
 * @param search 역직렬화 시킬 쿼리파라미터 문자열
 */
export function qsParse<T = Record<string, any>>(search: string) {
  return qs.parse(search, { ignoreQueryPrefix: true }) as unknown as T;
}
