const router = require('express').Router();
const {postNote, getNote, deleteNote} = require('../helper/noteshelper');


router.post('/api/notes', (req, res) => {
    console.log(req, res)
})

router.get('/api/notes', (req, res) => {
    console.log(req, res)
})

router.delete('/notes/:id', (req, res) => {
    console.log(req, res)
})

module.exports = router;

