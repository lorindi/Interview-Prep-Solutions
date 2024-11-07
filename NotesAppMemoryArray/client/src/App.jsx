import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import CreatePage from "./routes/CreatePage.jsx";
import UpdatePage from "./routes/UpdatePage.jsx";
import SinglePage from "./routes/SinglePage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/single/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
