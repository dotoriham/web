export const regexPassword = (password: string) => {
  const regexPassword =
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/;

  if (!regexPassword.test(password)) {
    return false;
  }
  return true;
};
