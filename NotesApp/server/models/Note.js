import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      enum: ["work", "meetings"],
      default: "work",
    },
  },
  { timestamps: true }
);
const Note = mongoose.model("Note", noteSchema);
export default Note;
