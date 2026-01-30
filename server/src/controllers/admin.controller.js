const Announcement = require("../models/Announcement");

/**
 * GET /announcements
 * Student: view announcements
 */
exports.getAnnouncements = async (req, res) => {
  try {
    const { campus, block } = req.user.location || {};

    const announcements = await Announcement.find({
      $or: [
        { target: "All" },
        { target: campus },
        { target: block }
      ]
    }).sort({ createdAt: -1 });

    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch announcements" });
  }
};

/**
 * POST /admin/announcements
 * Admin: create announcement
 */
exports.createAnnouncement = async (req, res) => {
  try {
    const { title, message, target } = req.body;

    if (!title || !message) {
      return res.status(400).json({ message: "Title and message required" });
    }

    const announcement = await Announcement.create({
      title,
      message,
      target: target || "All",
      createdBy: req.user._id
    });

    res.status(201).json(announcement);
  } catch (err) {
    res.status(500).json({ message: "Failed to create announcement" });
  }
};

/**
 * GET /admin/announcements
 * Admin: view all announcements
 */
exports.getAdminAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find()
      .sort({ createdAt: -1 });

    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch announcements" });
  }
};

/**
 * DELETE /admin/announcements/:id
 * Admin: delete announcement
 */
exports.deleteAnnouncement = async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.json({ message: "Announcement deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete announcement" });
  }
};
