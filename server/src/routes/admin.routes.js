import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { requireAdmin } from "../middlewares/role.middleware.js";

import {
  getAllIssues,
  assignIssue,
  updateIssueStatus,
  mergeIssues
} from "../controllers/admin.controller.js";

const router = express.Router();

// Admin-only protection
router.use(protect, requireAdmin);

// Issue management
router.get("/issues", getAllIssues);
router.patch("/issues/:id/assign", assignIssue);
router.patch("/issues/:id/status", updateIssueStatus);
router.patch("/issues/:id/merge", mergeIssues);

export default router;
