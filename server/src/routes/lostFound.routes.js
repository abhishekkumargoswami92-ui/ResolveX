import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { requireAdmin } from "../middlewares/role.middleware.js";

import {
  reportLost,
  reportFound,
  getApprovedItems,
  getMyItems,
  adminGetAll,
  approveItem,
  rejectItem,
  markClaimed
} from "../controllers/lostFound.controller.js";

const router = express.Router();

/**
 * STUDENT
 */
router.post("/lost", protect, reportLost);
router.post("/found", protect, reportFound);
router.get("/", protect, getApprovedItems);
router.get("/my", protect, getMyItems);

/**
 * ADMIN
 */
router.get("/admin", protect, requireAdmin, adminGetAll);
router.patch("/:id/approve", protect, requireAdmin, approveItem);
router.patch("/:id/reject", protect, requireAdmin, rejectItem);
router.patch("/:id/mark-claimed", protect, requireAdmin, markClaimed);

export default router;
