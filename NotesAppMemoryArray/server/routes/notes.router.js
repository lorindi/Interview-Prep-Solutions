import express from 'express';
import { createNote, updateNote, deleteNote, listNotes, singleNote } from '../controllers/notes.controllers.js';

const router = express.Router();

router.post('/create', createNote);
router.put('/update', updateNote);
router.delete('/delete', deleteNote);
router.get('/list', listNotes);
router.get('/single', singleNote);

export default router;
