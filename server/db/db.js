const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

function getQuestions(db = connection) {
  return db('questions').select()
}

module.exports = { getQuestions }
