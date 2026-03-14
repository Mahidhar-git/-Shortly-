import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

/* =========================
   FETCH MY SHORT URLS
========================= */
export const useFetchMyShortUrls = (onError) => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["my-shortenurls"],
    queryFn: async () => {
      const response = await api.get("/api/urls/myurls");
      return response.data;
    },
    select: (data) =>
      [...data].sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      ),
    staleTime: 0,
    cacheTime:0,
    retry: false,
    onError,
    enabled: !!token,
  });
};

/* =========================
   FETCH TOTAL CLICKS (🔥 FIXED)
========================= */
export const useFetchTotalClicks = (onError) => {
  const token = localStorage.getItem("token");

  const startDate = "2024-01-01";
  const endDate = new Date().toISOString().split("T")[0];

  return useQuery({
    queryKey: ["url-totalclick", startDate, endDate],
    queryFn: async () => {
      const response = await api.get(
        `/api/urls/totalClicks?startDate=${startDate}&endDate=${endDate}`
      );
      return response.data;
    },

    // 🔥 THIS IS WHAT YOU WERE MISSING
    select: (data) =>
      Object.keys(data).map((key) => ({
        clickDate: key,
        count: data[key],
      })),

    enabled: !!token,
    retry: false,
    onError,
  });
};
