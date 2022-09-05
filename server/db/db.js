const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

function getQuestions(db = connection) {
  return db('questions').select()
}

function getOneQuestion(id, db = connection) {
  return db('questions').where({ id }).first()
}

module.exports = { getQuestions, getOneQuestion }
