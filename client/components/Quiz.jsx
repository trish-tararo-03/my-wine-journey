import React, { useEffect, useState } from 'react'
import { getQuiz } from '../api/apiClient'

//Styled Components
import Container from '../../server/public/styledComponents/Container'
import Row from '../../server/public/styledComponents/Row'
import Button from '../../server/public/styledComponents/Button'
import { Wrapper } from '../../server/public/styledComponents/Wrapper'
import { Cards } from '../../server/public/styledComponents/Cards'

export default function Quiz() {
  const [quiz, setQuiz] = useState([])
  const [score, setScore] = useState(0)

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
              is_active,
            } = element

            function handleClick(evt) {
              let choice = evt.target
              if (choice.textContent === rightChoice) {
                setScore(score + 1)
                alert('Correct')
              }
            }

            return (
              <>
                <Wrapper>
                  <Cards>
                    <h2 key={questionId}>Question {questionId}/10</h2>
                    <p key={question}>{question}</p>

                    <Wrapper padding="1em">
                      <Button key={choice1} onClick={handleClick}>
                        {choice1}
                      </Button>
                      <Button key={choice2} onClick={handleClick}>
                        {choice2}
                      </Button>
                      <Button key={choice3} onClick={handleClick}>
                        {choice3}
                      </Button>
                      <Button key={choice4} onClick={handleClick}>
                        {choice4}
                      </Button>
                    </Wrapper>
                  </Cards>
                </Wrapper>
              </>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
