const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const { requireAdmin } = require("../middlewares/role.middleware");

const {
  createAnnouncement,
  getAllAnnouncements,
  deleteAnnouncement,
  getStudentAnnouncements
} = require("../controllers/announcement.controller");

const router = express.Router();

/**
 * STUDENT
 */
router.get("/", protect, getStudentAnnouncements);

/**
 * ADMIN
 */
router.post("/", protect, requireAdmin, createAnnouncement);
router.get("/admin", protect, requireAdmin, getAllAnnouncements);
router.delete("/:id", protect, requireAdmin, deleteAnnouncement);

module.exports = router;
