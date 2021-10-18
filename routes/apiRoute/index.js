const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notesArray = require('../../db/db.json');

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
        path.join(_dirname, '../../db/db.json'),
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

/*
function deleteNote(){
    for(let i = 0; i < notesArray.length; i++){
        let note = notesArray[i];

        if(note.id == id){
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(_dirname, '../../db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );
            break;
        }
    }
};

router.get('/notes', (req,res) =>{
    const delNote = deleteNote(req.body, allNotes);
    res.json(delNote);
});

router.post('/notes', (req, res) =>{
    req.body.id = note.length.toString();
    const delNote = createNewNote(req.body, note);
    res.json(delNote);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});
*/
module.exports = router;