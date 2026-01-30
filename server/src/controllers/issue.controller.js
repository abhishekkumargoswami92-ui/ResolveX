import Issue from "../models/Issue.js";
import Comment from "../models/Comment.js";

/**
 * POST /issues
 * Student reports an issue
 */
const createIssue = async (req, res) => {
  try {
    const { title, description, category, priority, visibility } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const issue = await Issue.create({
      title,
      description,
      category,
      priority,
      visibility,
      reportedBy: req.user._id,
      reporters: [req.user._id],
      location: req.user.location,
      statusHistory: [
        {
          status: "reported",
          remark: "Issue reported",
          updatedBy: req.user._id,
          timestamp: new Date()
        }
      ]
    });

    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ message: "Issue creation failed" });
  }
};

/**
 * GET /issues/my
 */
const getMyIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ reportedBy: req.user._id })
      .sort({ createdAt: -1 });

    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch issues" });
  }
};

/**
 * GET /issues/public
 */
const getPublicIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ visibility: "public" })
      .populate("reportedBy", "name")
      .sort({ createdAt: -1 });

    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch public issues" });
  }
};

/**
 * GET /issues/:id
 */
const getIssueById = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id)
      .populate("reportedBy", "name email");

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    // Private issue protection
    if (
      issue.visibility === "private" &&
      issue.reportedBy._id.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch issue" });
  }
};

/**
 * POST /issues/:id/comments
 * Public issues only
 */
const addComment = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue || issue.visibility !== "public") {
      return res.status(403).json({ message: "Comments not allowed" });
    }

    const comment = await Comment.create({
      issue: issue._id,
      user: req.user._id,
      text: req.body.text
    });

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: "Failed to add comment" });
  }
};

/**
 * GET /issues/:id/comments
 */
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ issue: req.params.id })
      .populate("user", "name")
      .sort({ createdAt: 1 });

    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch comments" });
  }
};

export {
  createIssue,
  getMyIssues,
  getPublicIssues,
  getIssueById,
  addComment,
  getComments
};
