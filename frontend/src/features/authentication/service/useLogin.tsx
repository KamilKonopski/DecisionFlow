import { useMutation } from "@tanstack/react-query";

type LoginPayload = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginPayload): Promise<LoginResponse> => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const text = await res.text();
      const parsed = text ? JSON.parse(text) : {};

      if (!res.ok) {
        throw new Error(parsed.message || `Error ${res.status}`);
      }

      return parsed;
    },
  });
};
