const PORT = process.env.PORT || 3001; // Make 3001 the port to the api server
const fs = require('fs'); // For write to file
const path = require('path');
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// Express.js base code
const express = require('express'); // Added because express is an npm package
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

const {notes} = require('./db/db.json');

app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});



