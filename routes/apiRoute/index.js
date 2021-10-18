const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const note = require('../../db/db.json');

function createNewNote(body, note){
    const notes = body;

    note.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(note, null, 2)
    );
};

// note = array
// notes = body
// delNote = call deleteNote function

router.get('/notes', (req,res) =>{
    res.json(note);
});

router.post('/notes', (req, res) =>{
    req.body.id = note.length.toString();
    const notes = createNewNote(req.body, note);
    res.json(notes);
});

function deleteNote(id, note){

    const notes = note.filter((n) => n.id === id)[0];
    if (notes) {
        const noteIndex = note.indexOf(notes);
        note.splice(noteIndex, 1);
        return note;
    }
};


router.delete('/notes/:id', (req, res) => {

    const { id } = req.params;
    const delNote = deleteNote(id, note);
    if (delNote) {
      res.json(delNote);
    } else {
      res.status(400).send("Didn't find any notes with that ID.");
    }
});

module.exports = router;