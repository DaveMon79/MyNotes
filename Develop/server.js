const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const router = require('./public/routes/notesroute');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/notes', router);


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))

})

console.log("hello")

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});

