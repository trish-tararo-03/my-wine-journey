import React, { useEffect, useState } from 'react'
import { getQuiz } from '../api/apiClient'

//Styled Components
import Container from '../../server/public/styledComponents/Container'
import Row from '../../server/public/styledComponents/Row'
import Button from '../../server/public/styledComponents/Button'

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
      <Container>
        <Row>
          {quiz.map((element) => {
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
                <p key={question}>{question}</p>
                <ul>
                  <Button key={choice1}>{choice1}</Button>
                  <Button key={choice2}>{choice2}</Button>
                  <Button key={choice3}>{choice3}</Button>
                  <Button key={choice4}>{choice4}</Button>
                </ul>
              </>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
