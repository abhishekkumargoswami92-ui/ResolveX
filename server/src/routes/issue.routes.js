import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  createIssue,
  getMyIssues,
  getPublicIssues,
  getIssueById,
  addComment,
  getComments,
} from "../controllers/issue.controller.js";

const router = express.Router();

/**
 * All issue routes require authentication
 */
router.use(protect);

/**
 * Student reports an issue
 * POST /issues
 */
router.post("/", createIssue);

/**
 * Student views own issues
 * GET /issues/my
 */
router.get("/my", getMyIssues);

/**
 * View public issues
 * GET /issues/public
 */
router.get("/public", getPublicIssues);

/**
 * Get issue details
 * GET /issues/:id
 */
router.get("/:id", getIssueById);

/**
 * Public issue comments
 */
router.post("/:id/comments", addComment);
router.get("/:id/comments", getComments);

export default router;
