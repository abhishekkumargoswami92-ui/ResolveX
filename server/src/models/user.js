import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },

    collegeName: {
      type: String,
      required: true,
    },

    location: {
      campus: { type: String },
      block: { type: String },
      room: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
