const PORT = process.env.PORT || 3001; // Make 3001 the port to the api server
const fs = require('fs'); // For write to file
const path = require('path');

// Express.js base code
const express = require('express'); // Added because express is an npm package
const app = express();

const allNotes = require("./db/db.json");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) =>{
    res.json(allNotes.slice(1));
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(_dirname, './public/index.html'));
});

app.get('/notes', (req,res) =>{
    res.sendFile(path.join(_dirname, './public/notes.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(_dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});



