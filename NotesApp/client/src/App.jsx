import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/update/:id" element={<EditNote />} />
      </Routes>
    </div>
  );
}

export default App;
