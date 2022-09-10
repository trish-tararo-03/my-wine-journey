import React, { useEffect, useState } from 'react'
import { getQuiz } from '../api/apiClient'

export default function Quiz() {
  const [quiz, setQuiz] = useState([])

  useEffect(() => {
    getQuiz()
      .then((item) => {
        setQuiz(item)
      })
      .catch((err) => {
        console.error('Check it Out!', err.message)
      })
  }, [])

  return (
    <>
      {quiz.map((element, i) => {
        const {
          questionId,
          question,
          answersId,
          choice1,
          choice2,
          choice3,
          choice4,
          rightChoice,
        } = element

        return (
          <>
            <h2 key={questionId}>Question {questionId}</h2>
            <p key={i}>{question}</p>

            <li key={choice1}>{choice1}</li>
            <li key={choice2}>{choice2}</li>
            <li key={choice3}>{choice3}</li>
            <li key={choice4}>{choice4}</li>
          </>
        )
      })}
    </>
  )
}
