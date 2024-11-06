import express from 'express'
import {createNote,
    updateNote,
    deleteNote,
    listNote,
    detailsNote} from '../controllers/notes.controller.js'
const router = express.Router()

router.post('/create', createNote)
router.put('/update/:id', updateNote)
router.delete('/delete/:id', deleteNote)
router.get('/list', listNote)
router.get('/details/:id', detailsNote)


export default router