import api from "./api";

/* STUDENT */

export const createIssue = (data) =>
  api.post("/issues", data);

export const getMyIssues = () =>
  api.get("/issues/my");

export const getPublicIssues = () =>
  api.get("/issues/public");

export const getIssueById = (id) =>
  api.get(`/issues/${id}`);

export const getIssueComments = (id) =>
  api.get(`/issues/${id}/comments`);

export const addIssueComment = (id, text) =>
  api.post(`/issues/${id}/comments`, { text });

/* ADMIN */

export const getAllIssuesAdmin = () =>
  api.get("/admin/issues");

export const assignIssue = (id, assignee) =>
  api.patch(`/admin/issues/${id}/assign`, { assignee });

export const updateIssueStatus = (id, status, remark) =>
  api.patch(`/admin/issues/${id}/status`, { status, remark });

export const mergeIssue = (id, parentIssueId) =>
  api.patch(`/admin/issues/${id}/merge`, { parentIssueId });
