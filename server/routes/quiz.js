const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

//get questions route?
///api/v1/quiz
router.get('/', (req, res) => {
  return db
    .getQuestionAndAnswers()
    .then((item) => {
      console.log(item)
      res.json(item)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return db
    .getOneQuestion(id)
    .then((item) => {
      console.log(item)
      res.json(item)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})
module.exports = router
