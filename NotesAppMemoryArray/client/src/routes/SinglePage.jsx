import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { singleNote, deleteNote } from "../services/notesService.js";
function SinglePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetchSingleNote();
  }, [id]);

  const fetchSingleNote = async () => {
    try {
      const res = await singleNote(id);
      const single = res.data.note;
      setNote(single);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {note ? (
        <>
          <h2>{note.title}</h2>
          <p>{note.description}</p>
          <div>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
            <button>Update</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SinglePage;
