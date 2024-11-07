import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [updateNote, setUpdateNote] = useState({ index: null, note: '' });
  const [singleNoteIndex, setSingleNoteIndex] = useState('');
  const [singleNote, setSingleNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/notes/list');
      setNotes(response.data.notes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const createNote = async () => {
    try {
      await axios.post('http://localhost:5000/notes/create', { note: newNote });
      fetchNotes();
      setNewNote('');
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const updateExistingNote = async () => {
    try {
      await axios.put('http://localhost:5000/notes/update', updateNote);
      fetchNotes();
      setUpdateNote({ index: null, note: '' });
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const deleteNote = async (index) => {
    try {
      await axios.delete('http://localhost:5000/notes/delete', { data: { index } });
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const fetchSingleNote = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/notes/single`, { data: { index: singleNoteIndex } });
        setSingleNote(response.data.note);
    } catch (error) {
        console.error('Error fetching single note:', error);
        console.log(error);
        
    }
};


  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => deleteNote(index)}>Delete</button>
            <button onClick={() => setUpdateNote({ index, note })}>Update</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="New Note"
        />
        <button onClick={createNote}>Create Note</button>
      </div>
      <div>
        <input
          type="number"
          value={updateNote.index !== null ? updateNote.index : ''}
          onChange={(e) => setUpdateNote({ ...updateNote, index: e.target.value })}
          placeholder="Note Index"
        />
        <input
          type="text"
          value={updateNote.note}
          onChange={(e) => setUpdateNote({ ...updateNote, note: e.target.value })}
          placeholder="Updated Note"
        />
        <button onClick={updateExistingNote}>Update Note</button>
      </div>
      <div>
        <input
          type="number"
          value={singleNoteIndex}
          onChange={(e) => setSingleNoteIndex(e.target.value)}
          placeholder="Note Index"
        />
        <button onClick={fetchSingleNote}>Fetch Single Note</button>
        {singleNote && <div>Single Note: {singleNote}</div>}
      </div>
    </div>
  );
}

export default App;
