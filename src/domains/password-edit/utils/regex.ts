const regex =
  /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/;

// 비밀번호 형식 검증 함수 (정규식)
export const regexPassword = (password: string) => {
  return regex.test(password);
};
