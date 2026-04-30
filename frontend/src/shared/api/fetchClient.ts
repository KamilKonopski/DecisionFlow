import { getToken } from "@/features/authentication/lib/auth";

export const fetchClient = async <T = unknown>(
  url: string,
  options: RequestInit = {},
): Promise<T | null> => {
  const token = getToken();

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/auth?mode=login";
    return null;
  }

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`);
  }

  const data: T = await res.json();
  return data;
};
