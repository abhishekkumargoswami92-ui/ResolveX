import LostItem from "../models/LostItem.js";

/**
 * POST /lost-found/lost
 */
const reportLost = async (req, res) => {
  try {
    const { itemName, description } = req.body;

    const item = await LostItem.create({
      itemName,
      description,
      type: "lost",
      location: req.user.location,
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
const reportFound = async (req, res) => {
  try {
    const { itemName, description } = req.body;

    const item = await LostItem.create({
      itemName,
      description,
      type: "found",
      location: req.user.location,
      reportedBy: req.user._id
    });

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to report found item" });
  }
};

/**
 * GET /lost-found
 * Student – approved only
 */
const getApprovedItems = async (req, res) => {
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
const getMyItems = async (req, res) => {
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
const adminGetAll = async (req, res) => {
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
 * ADMIN ACTIONS
 */
const approveItem = async (req, res) => {
  try {
    const item = await LostItem.findById(req.params.id);
    item.status = "approved";
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Approve failed" });
  }
};

const rejectItem = async (req, res) => {
  try {
    const item = await LostItem.findById(req.params.id);
    item.status = "rejected";
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Reject failed" });
  }
};

const markClaimed = async (req, res) => {
  try {
    const item = await LostItem.findById(req.params.id);
    item.status = "claimed";
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Mark claimed failed" });
  }
};

export {
  reportLost,
  reportFound,
  getApprovedItems,
  getMyItems,
  adminGetAll,
  approveItem,
  rejectItem,
  markClaimed
};
