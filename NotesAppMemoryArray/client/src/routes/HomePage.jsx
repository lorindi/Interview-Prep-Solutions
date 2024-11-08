import { useEffect, useState } from "react";
import { allNotes } from "../services/notesService.js";
import Card from "../components/Card.jsx";
import CreatePage from "./CreatePage.jsx";

function HomePage() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await allNotes();
      const data = res.data.notes;
      setNotes(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <CreatePage fetchNotes={fetchNotes}/>
      {notes.length > 0 ? (
        notes.map((note) => <Card note={note} key={note.id} />)
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
}

export default HomePage;
