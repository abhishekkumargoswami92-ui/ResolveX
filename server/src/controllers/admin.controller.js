const Issue = require("../models/Issue");

/**
 * GET /admin/issues
 * Admin: view all issues
 */
exports.getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find()
      .populate("reportedBy", "name email")
      .sort({ createdAt: -1 });

    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch issues" });
  }
};

/**
 * PATCH /admin/issues/:id/assign
 * Admin assigns issue to staff (string-based for hackathon)
 */
exports.assignIssue = async (req, res) => {
  try {
    const { assignedTo } = req.body;

    if (!assignedTo) {
      return res.status(400).json({ message: "assignedTo required" });
    }

    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.assignedTo = assignedTo;
    issue.status = "assigned";
    issue.statusHistory.push({
      status: "assigned",
      remark: `Assigned to ${assignedTo}`,
      updatedBy: req.user._id
    });

    await issue.save();
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: "Assignment failed" });
  }
};

/**
 * PATCH /admin/issues/:id/status
 * reported → assigned → in-progress → resolved → closed
 */
exports.updateIssueStatus = async (req, res) => {
  try {
    const { status, remark } = req.body;

    const allowed = [
      "reported",
      "assigned",
      "in-progress",
      "resolved",
      "closed"
    ];

    if (!allowed.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.status = status;
    issue.statusHistory.push({
      status,
      remark: remark || `Status updated to ${status}`,
      updatedBy: req.user._id
    });

    await issue.save();
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: "Status update failed" });
  }
};

/**
 * PATCH /admin/issues/:id/merge
 * Merge duplicate issues into parent
 */
exports.mergeIssues = async (req, res) => {
  try {
    const { duplicateIds } = req.body;

    if (!Array.isArray(duplicateIds) || duplicateIds.length === 0) {
      return res.status(400).json({ message: "duplicateIds required" });
    }

    const parent = await Issue.findById(req.params.id);
    if (!parent) {
      return res.status(404).json({ message: "Parent issue not found" });
    }

    const duplicates = await Issue.find({ _id: { $in: duplicateIds } });

    duplicates.forEach((dup) => {
      dup.reporters.forEach((r) => {
        if (!parent.reporters.includes(r)) {
          parent.reporters.push(r);
        }
      });
      dup.status = "closed";
      dup.statusHistory.push({
        status: "closed",
        remark: "Merged into another issue",
        updatedBy: req.user._id
      });
    });

    await parent.save();
    await Promise.all(duplicates.map((d) => d.save()));

    res.json({ message: "Issues merged successfully" });
  } catch (err) {
    res.status(500).json({ message: "Merge failed" });
  }
};
