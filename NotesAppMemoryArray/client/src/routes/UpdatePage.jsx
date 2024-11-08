import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote, singleNote } from "../services/notesService";
function UpdatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    fetchNoteData();
  }, [id]);

  const fetchNoteData = async () => {
    try {
      const res = await singleNote(id);
      const { title, description } = res.data.note;
      setTitle(title);
      setDescription(description);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNote(id, { title, description });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpdateSubmit}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdatePage;
