import api from "./api";

/* STUDENT */

export const getStudentAnnouncements = () =>
  api.get("/announcements");

/* ADMIN */

export const getAdminAnnouncements = () =>
  api.get("/admin/announcements");

export const createAnnouncement = (data) =>
  api.post("/admin/announcements", data);

export const deleteAnnouncement = (id) =>
  api.delete(`/admin/announcements/${id}`);
