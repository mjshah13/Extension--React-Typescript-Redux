export const getCookie = (key: string) => {
  return sessionStorage.getItem(key);
};
export const setCookie = (key: string, value: string) => {
  return sessionStorage.setItem(key, value);
};

export const removeCookie = (key: string) => {
  return sessionStorage.removeItem(key);
};

export const removeAllCookie = () => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("organization");
  sessionStorage.removeItem("department");
  sessionStorage.removeItem("departmentName");
  sessionStorage.removeItem("previousOrderId");
  return;
};
