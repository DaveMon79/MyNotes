const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const notesArray = require('../db/db.json')


router.post('/notes', (req, res) => {
    console.log(notesArray)
    const note = { title, text, id } = req.body;
    note.id = notesArray.length + 1
    notesArray.push(note)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArray))
    res.json(notesArray)

})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))

});


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

