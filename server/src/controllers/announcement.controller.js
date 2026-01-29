const Announcement = require("../models/Announcement");

/**
 * POST /announcements
 * ADMIN ONLY
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
      target,
      createdBy: req.user._id
    });

    res.status(201).json(announcement);
  } catch (err) {
    res.status(500).json({ message: "Failed to create announcement" });
  }
};

/**
 * GET /announcements/admin
 * ADMIN ONLY
 */
exports.getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find()
      .sort({ createdAt: -1 });

    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch announcements" });
  }
};

/**
 * DELETE /announcements/:id
 * ADMIN ONLY
 */
exports.deleteAnnouncement = async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.json({ message: "Announcement deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};

/**
 * GET /announcements
 * STUDENT
 */
exports.getStudentAnnouncements = async (req, res) => {
  try {
    const { campus, block } = req.user.location;

    const announcements = await Announcement.find({
      $or: [
        { target: {} }, // global
        { "target.campus": campus },
        {
          "target.campus": campus,
          "target.block": block
        }
      ]
    }).sort({ createdAt: -1 });

    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch announcements" });
  }
};
