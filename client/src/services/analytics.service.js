import api from "./api";

/* ADMIN ONLY */

export const getAnalyticsOverview = () =>
  api.get("/admin/analytics/overview");
