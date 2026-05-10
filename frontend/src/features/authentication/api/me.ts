import { getToken } from "../lib/auth";

export const fetchMe = async () => {
  const token = getToken();

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unauthorized");
  }

  return response.json();
};
