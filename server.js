// routes and files imported to file
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const router = require('./routes/notesroute');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));


// Api router route actived 
app.use('/api', router);


// Returns the landing page when request by user
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})


// Returns the notes page when request by user
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))

})

// When activated it listens for user input
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});

