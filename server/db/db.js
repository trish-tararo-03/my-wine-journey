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
  // console.log('We Here')
  return db('answers')
    .join('questions', 'questions.question_id', 'answers.question_id')
    .select(
      'questions.question_id as questionId',
      'questions.question',
      'questions.is_active',
      'answers.answers_id as answersId',
      'answers.choice_1 as choice1',
      'answers.choice_2 as choice2',
      'answers.choice_3 as choice3',
      'answers.choice_4 as choice4',
      'answers.right_choice as rightChoice'
    )
}

/**
 * I want to display a question with the relevent answers
 * I should join the answers table to the questions one
 * where the answers id matches the question id
 */

module.exports = { getQuestions, getOneQuestion, getQuestionAndAnswers }
