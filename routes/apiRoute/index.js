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

router.get('/notes', (req,res) =>{
    res.json(note);
});

router.post('/notes', (req, res) =>{
    req.body.id = note.length.toString();
    const notes = createNewNote(req.body, note);
    res.json(notes);
});

// function deleteNote(){
// 
//   const note = notes.filter((n) => n.id === noteId)[0];
//   if (note) {
//     const noteIndex = notes.indexOf(note);
//     notes.splice(noteIndex, 1);
//     writeFile(notes);
//     return note;
//   }
// };


// router.delete('/notes/:id', (req, res) => {
//     const { id } = req.params;
//     const note = deleteNote(id, notes);
//     if (note) {
//       res.json(note);
//     } else {
//       res.status(400).send("Didn't find any notes with that ID.");
//     }
// });

module.exports = router;