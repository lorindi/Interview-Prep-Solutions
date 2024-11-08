import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote, singleNote } from "../services/notesService";
import { toast} from "react-toastify";
function UpdatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    fetchNoteData();
  }, [id]);
  
  useEffect(() => {
    validateForm(); 
  }, [title, description]);

  const fetchNoteData = async () => {
    try {
      const res = await singleNote(id);
      const { title, description } = res.data.note;
      setTitle(title);
      setDescription(description);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch the note data.");
    }
  };

  const validateForm = () => {
    if (title.trim() && description.trim()) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNote(id, { title, description });
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update the note.");
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
      <button type="submit" disabled={!isFormValid}>Update</button>
    </form>
  );
}

export default UpdatePage;
