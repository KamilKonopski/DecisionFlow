export const isTokenValid = (token: string) => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return false;

    const payload = JSON.parse(atob(parts[1]));
    const exp = payload?.exp;

    if (!exp) return false;

    return Date.now() < exp * 1000;
  } catch {
    return false;
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  if (!isTokenValid(token)) {
    localStorage.removeItem("token");
    return null;
  }

  return token;
};

export const isAuthenticated = () => {
  return !!getToken();
};
