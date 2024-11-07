let notes = [];

export const createNote = (req, res) => {
    try {
        const note = req.body.note;
        notes.push(note);
        res.status(200).json({ message: 'Note created successfully', note: note });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to create note' });
    }
}

export const updateNote = (req, res) => {
    try {
        const index = req.body.index;
        const updatedNote = req.body.note;
        if (index >= 0 && index < notes.length) {
            notes[index] = updatedNote;
            res.status(200).json({ message: 'Note updated successfully', note: updatedNote });
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to update note' });
    }
}

export const deleteNote = (req, res) => {
    try {
        const index = req.body.index;
        if (index >= 0 && index < notes.length) {
            const deletedNote = notes.splice(index, 1);
            res.status(200).json({ message: 'Note deleted successfully', note: deletedNote });
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to delete note' });
    }
}

export const listNotes = (req, res) => {
    try {
        res.status(200).json({ message: 'Notes retrieved successfully', notes: notes });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to retrieve notes' });
    }
}

export const singleNote = (req, res) => {
    try {
        const index = req.body;
        console.log(index);
        

        
        if (index >= 0 && index < notes.length || index === 0) {
            res.status(200).json({ message: 'Note retrieved successfully', note: notes[index] });
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to retrieve note' });
    }
}




