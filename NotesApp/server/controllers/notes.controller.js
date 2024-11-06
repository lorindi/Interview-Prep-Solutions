import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  const { title, description, tags } = req.body;

  try {
    const note = await Note.findOne({ title, description, tags });
    if (note) return res.status(409).json({ message: "Note already exists" });

    const newNote = new Note({
      title,
      description,
      tags,
    });
    const saveNote = await newNote.save();
    res.status(200).json({ message: "Note created successfully", note:saveNote });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create note" });
  }
};
export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description, tags } = req.body;

  try {
    const note = await Note.findByIdAndUpdate(
      id,
      { title, description, tags },
      { new: true }
    );
    if (!note) res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note updated successfully", note });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update note" });
  }
};
export const deleteNote = async (req, res) => {
  const { id } = req.params;
  const { title, description, tags } = req.body;
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: `Note with ID ${id} deleted successfully.` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete note" });
  }
};
export const listNote = async (req, res) => {
  try {
    const notes = await Note.find();
    if (!notes) return res.status(404).json({ message: "No notes available." });

    res.status(200).json({ message: "Notes fetched successfully", notes });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching notes" });
  }
};
export const detailsNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note details fetched successfully", note });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching note detail" });
  }
};
