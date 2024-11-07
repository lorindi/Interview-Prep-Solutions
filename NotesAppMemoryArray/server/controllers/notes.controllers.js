import { v4 as uuidv4 } from "uuid";
let notes = [];

export const createNote = (req, res) => {
  const { title, description } = req.body;

  try {
    if (!title.trim() || !description.trim())
      return res
        .status(400)
        .json({ message: "Title and description are required" });

    if (typeof title !== "string" || typeof description !== "string") {
      return res
        .status(400)
        .json({ message: "Title and description must be strings" });
    }

    const newNote = {
      id: uuidv4(),
      title: title.trim(),
      description: description.trim(),
    };

    notes.push(newNote);

    res
      .status(200)
      .json({ message: "Note created successfully", note: newNote });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create node" });
  }
};

export const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const index = notes.findIndex((note) => note.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Note not found" });
    }
    if (title && (typeof title !== "string" || !title.trim())) {
      return res
        .status(400)
        .json({ message: "Title must be a non-empty string" });
    }

    if (
      description &&
      (typeof description !== "string" || !description.trim())
    ) {
      return res
        .status(400)
        .json({ message: "Description must be a non-empty string" });
    }

    if (title?.trim()) notes[index].title = title.trim();
    if (description?.trim()) notes[index].description = description.trim();

    res
      .status(200)
      .json({ message: "Note updated successfully", note: notes[index] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update node" });
  }
};

export const deleteNote = (req, res) => {
  const { id } = req.params;

  try {
    const index = notes.findIndex((note) => note.id === id);

    if (index === -1)
      return res.status(404).json({ message: "Note not found" });

    notes.splice(index, 1);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete note" });
  }
};

export const allNotes = (req, res) => {
  try {
    if (notes.length === 0) {
      return res.status(200).json({ message: "No notes available", notes: [] });
    }
    
    res.status(200).json({ message: "Notes retrieved successfully", notes });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to retrieve notes" });
  }
};

export const singleNote = (req, res) => {
  const { id } = req.params;
  

  try {
    const index = notes.findIndex((note) => note.id === id);
    
    if (index === -1)
      return res.status(404).json({ message: "Note not found" });

    res
      .status(200)
      .json({ message: "Note retrieved successfully", note: notes[index] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve note" });
  }
};
