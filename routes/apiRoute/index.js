const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const note = require('../../db/db.json');

function createNewNote(body, note){
    const notes = body;
    /*if (!Array.isArray(notesArray)){
        notesArray = [];
    }
    if(notesArray.length === 0){
        notesArray.push(0);
    }
    body.id = notesArray[0];
    notesArray[0]++;*/

    note.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(note, null, 2)
    );
//    return newNote;
};

router.get('/notes', (req,res) =>{
    //const newNote = createNewNote(req.body, allNotes);
    res.json(note);
});

router.post('/notes', (req, res) =>{
    req.body.id = note.length.toString();
    const notes = createNewNote(req.body, note);
    res.json(notes);
});

// function deleteNote(){
//   //get the note to delete
//   const note = notes.filter((n) => n.id === noteId)[0];
//   if (note) {
//     //get the note  index from the notes
//     const noteIndex = notes.indexOf(note);
//     //delete the note from the notes array
//     notes.splice(noteIndex, 1);
//     //write array in the file
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