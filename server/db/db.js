const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

function getQuestions(db = connection) {
  return db('questions').select()
}

function getOneQuestion(id, db = connection) {
  return db('questions').where({ id }).first()
}

function getQuestionAndAnswers(db = connection) {
  return db('questions').join(
    'answers',
    'answers.answers_id',
    'answers.question_id'
  )
}

/**
 * I want to display a question with the relevent answers
 * I should join the answers table to the questions one
 * where the answers id matches the question id
 */

module.exports = { getQuestions, getOneQuestion, getQuestionAndAnswers }
