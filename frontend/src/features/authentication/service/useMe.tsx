import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../api/me";
import { getToken } from "../lib/auth";

const useMe = () => {
  const token = getToken();

  return useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    enabled: !!token,
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export default useMe;
