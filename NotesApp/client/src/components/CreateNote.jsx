import { useState } from "react";
import { createNote } from "../services/notesService";
function CreateNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("work");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNote({ title, description, tags });
      setTitle("");
      setDescription("");
      setTags("work");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value)
                console.log(e.target.value);
                
            }}
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateNote;
