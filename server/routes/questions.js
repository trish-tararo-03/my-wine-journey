const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

//get questions route?
router.get('/api/v1/questions', (req, res) => {
  return db
    .getQuestions()
    .then((item) => {
      console.log(item)
      res.json(item)
    })
    .catch((err) => {
      console.err(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
