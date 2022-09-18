// routes and files imported to file
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const notesArray = require('../db/db.json')

// This function takes the user notes, adds an id and pushed to the notes array in JSON format
router.post('/notes', (req, res) => {

    const note = { title, text, id } = req.body;
    note.id = notesArray.length + 1
    notesArray.push(note)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArray))
    res.json(notesArray)

})

// This sends the notes array to the front end
router.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, '../db/db.json'))

});

// Turns the string number into an interger, then Loops through the notes array and deletes
// the object with a matching id to the user delete request and re-writes file in JSON
router.delete('/notes/:id', (req, res) => {

    let note_id = parseInt(req.params.id)
   
    for (let i = 0; i < notesArray.length; i++) {

        if (note_id === notesArray[i].id) {
            notesArray.splice(i, 1)
        }
    }

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArray))
    res.json(notesArray)
})

module.exports = router;