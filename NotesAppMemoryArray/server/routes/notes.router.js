import express from 'express';
import { createNote, updateNote, deleteNote, allNotes, singleNote} from '../controllers/notes.controllers.js';

const router = express.Router();

router.post('/create', createNote);
router.get('/all', allNotes);
router.get('/note/:id', singleNote);
router.put('/update/:id', updateNote);
router.delete('/delete/:id', deleteNote);


export default router;
