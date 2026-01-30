import mongoose from "mongoose";

const lostItemSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["lost", "found"],
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true, 
      // free text: "Hostel A corridor", "Mess", etc.
    },

    image: {
      type: String,
      default: null, // multer / cloud URL later
    },

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "claimed"],
      default: "pending",
    },

    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null, // admin
    },
  },
  {
    timestamps: true,
  }
);

/* Indexes for admin + student views */
lostItemSchema.index({ type: 1 });
lostItemSchema.index({ status: 1 });
lostItemSchema.index({ createdAt: -1 });

const LostItem = mongoose.model("LostItem", lostItemSchema);

export default LostItem;
