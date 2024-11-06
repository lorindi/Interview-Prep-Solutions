import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import notesRoute from "./routes/notes.router.js";
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/notes-db")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors({ origin: "http://localhost:5174", credentials: true }));

app.get("/", (req, res) => {
  res.send("Restful api");
});

app.use("/api/notes", notesRoute);

app.listen(5000, () => {
  console.log("Restful server is listening on port 5000...");
});
