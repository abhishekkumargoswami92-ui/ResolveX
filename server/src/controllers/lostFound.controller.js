const LostItem = require("../models/LostItem");

/**
 * POST /lost-found/lost
 */
exports.reportLost = async (req, res) => {
  try {
    const { title, description, location } = req.body;

    if (!title || !description || !location) {
      return res.status(400).json({ message: "All fields required" });
    }

    const item = await LostItem.create({
      type: "lost",
      title,
      description,
      location,
      reportedBy: req.user._id
    });

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to report lost item" });
  }
};

/**
 * POST /lost-found/found
 */
exports.reportFound = async (req, res) => {
  try {
    const { title, description, location } = req.body;

    if (!title || !description || !location) {
      return res.status(400).json({ message: "All fields required" });
    }

    const item = await LostItem.create({
      type: "found",
      title,
      description,
      location,
      reportedBy: req.user._id
    });

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to report found item" });
  }
};

/**
 * GET /lost-found
 * STUDENT – approved only
 */
exports.getApprovedItems = async (req, res) => {
  try {
    const items = await LostItem.find({ status: "approved" })
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};

/**
 * GET /lost-found/my
 */
exports.getMyItems = async (req, res) => {
  try {
    const items = await LostItem.find({ reportedBy: req.user._id })
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch my items" });
  }
};

/**
 * ADMIN: GET /lost-found/admin
 */
exports.adminGetAll = async (req, res) => {
  try {
    const items = await LostItem.find()
      .populate("reportedBy", "name email")
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};

/**
 * PATCH /lost-found/:id/approve
 */
exports.approveItem = async (req, res) => {
  try {
    const item = await LostItem.findById(req.params.id);
    item.status = "approved";
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Approve failed" });
  }
};

/**
 * PATCH /lost-found/:id/reject
 */
exports.rejectItem = async (req, res) => {
  try {
    const item = await LostItem.findById(req.params.id);
    item.status = "rejected";
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Reject failed" });
  }
};

/**
 * PATCH /lost-found/:id/mark-claimed
 */
exports.markClaimed = async (req, res) => {
  try {
    const item = await LostItem.findById(req.params.id);
    item.status = "claimed";
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Mark claimed failed" });
  }
};
