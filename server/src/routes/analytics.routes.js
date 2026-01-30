import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { requireAdmin } from "../middlewares/role.middleware.js";
import {
  getAnalyticsOverview
} from "../controllers/analytics.controller.js";

const router = express.Router();

router.use(protect, requireAdmin);

// GET /admin/analytics
router.get("/", getAnalyticsOverview);

export default router;
