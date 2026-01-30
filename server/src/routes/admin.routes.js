const express = require("express");
const { protect } = require("../middlewares/auth.middleware.js");
const { requireAdmin } = require("../middlewares/role.middleware.js");

const {
  getAllIssues,
  assignIssue,
  updateIssueStatus,
  mergeIssues
} = require("../controllers/admin.controller.js");

const router = express.Router();

router.use(protect, requireAdmin);

router.get("/issues", getAllIssues);
router.patch("/issues/:id/assign", assignIssue);
router.patch("/issues/:id/status", updateIssueStatus);
router.patch("/issues/:id/merge", mergeIssues);

module.exports = router;
