// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const quizUrl = '/api/v1/quiz'

export function getQuiz() {
  return request.get(quizUrl).then((res) => {
    return res.body
  })
}
