import React, { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../services/notesService";
import { Link } from "react-router-dom";
const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      
      setNotes(response.data.notes);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  return (
    <div>
      <h2>Notes List</h2>
      <div>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button onClick={() => handleDelete(note._id)}>Delete</button>
            <button>
              <Link to={`/update/${note._id}`}>Edit</Link>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
