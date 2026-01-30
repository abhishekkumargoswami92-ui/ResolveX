import Announcement from "../models/Announcement.js";

/**
 * STUDENT: GET /announcements
 */
const getAnnouncements = async (req, res) => {
  try {
    const { campus, block } = req.user.location;

    const announcements = await Announcement.find({
      $or: [
        { target: "all" },
        { targetCampus: campus },
        { targetBlock: block }
      ]
    }).sort({ createdAt: -1 });

    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch announcements" });
  }
};

/**
 * ADMIN: POST /announcements/admin
 */
const createAnnouncement = async (req, res) => {
  try {
    const { title, message, target, targetCampus, targetBlock } = req.body;

    const announcement = await Announcement.create({
      title,
      message,
      target,
      targetCampus,
      targetBlock,
      createdBy: req.user._id
    });

    res.status(201).json(announcement);
  } catch (err) {
    res.status(500).json({ message: "Failed to create announcement" });
  }
};

/**
 * ADMIN: GET /announcements/admin
 */
const getAdminAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find()
      .sort({ createdAt: -1 });

    res.json(announcements);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch announcements" });
  }
};

/**
 * ADMIN: DELETE /announcements/admin/:id
 */
const deleteAnnouncement = async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.json({ message: "Announcement deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};

export {
  getAnnouncements,
  createAnnouncement,
  getAdminAnnouncements,
  deleteAnnouncement
};
