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
    <div>
      {quiz.map((element, i) => {
        return <h2 key={i}>{element.answers}</h2>
      })}
    </div>
  )
}
