export const regexEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(String(email).toLowerCase())) {
    return true;
  }
  return false;
};

export const regexNum = (text: string) => {
  const regex = /[0-9]/;
  if (regex.test(text)) {
    return true;
  }
  return false;
};

export const regexEng = (text: string) => {
  const regex = /[a-zA-Z]/;
  if (regex.test(text)) {
    return true;
  }
  return false;
};

export const regexSpe = (text: string) => {
  const regex = /[~!@#$%^&*()_+|<>?:{}=-]/;
  if (regex.test(text)) {
    return true;
  }
  return false;
};
