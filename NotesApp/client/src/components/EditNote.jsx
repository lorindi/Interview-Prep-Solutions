import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNoteDetails, updateNote } from "../services/notesService";

function EditNote() {
  const { id } = useParams(); 

  
  const navigate = useNavigate(); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("work");

  useEffect(() => {
    fetchNoteDetails();
  }, [id]);

  const fetchNoteDetails = async () => {
    try {
      const response = await getNoteDetails(id); 
      const { title, description, tags } = response.data.note;
      setTitle(title);
      setDescription(description);
      setTags(tags);
    } catch (err) {
      console.error("Error fetching note details:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNote(id, { title, description, tags });
      navigate("/"); 
    } catch (err) {
      console.error("Error updating note:", err);
    }
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Tags</label>
          <select value={tags} onChange={(e) => setTags(e.target.value)}>
            <option value="work">Work</option>
            <option value="meetings">Meetings</option>
          </select>
        </div>
        <button type="submit">Update Note</button>
      </form>
    </div>
  );
}

export default EditNote;
