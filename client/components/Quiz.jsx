import React, { useEffect, useState } from 'react'
import { getQuiz } from '../api/apiClient'

//Styled Components
import Container from '../../server/public/styledComponents/Container'
import Row from '../../server/public/styledComponents/Row'
import Button from '../../server/public/styledComponents/Button'
import { Wrapper } from '../../server/public/styledComponents/Wrapper'
import { Cards } from '../../server/public/styledComponents/Cards'
import { Subtitle } from '../../server/public/styledComponents/Subtitle'
import { Paragraph } from '../../server/public/styledComponents/Paragraph'

export default function Quiz() {
  const [quiz, setQuiz] = useState([])
  const [score, setScore] = useState(0)
  // const [showScore, setShowScore] = useState(false)

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
          <Wrapper>
            {quiz.map((element, i) => {
              const {
                questionId,
                question,
                // answersId,
                choice1,
                choice2,
                choice3,
                choice4,
                rightChoice,
                // is_active,
              } = element

              function handleClick(evt) {
                let choice = evt.target
                console.log(choice)
                if (choice.textContent === rightChoice) {
                  Button.backgroundColor = 'green'
                  alert('Correct')
                  setScore(score + 1)
                }
              }

              return (
                <>
                  <Cards key={i}>
                    <Subtitle key={questionId}>
                      Question {questionId}/10
                    </Subtitle>
                    <Paragraph key={question}>{question}</Paragraph>

                    <Wrapper padding="1em">
                      <Button type="button" key={choice1} onClick={handleClick}>
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
                </>
              )
            })}
          </Wrapper>
        </Row>
      </Container>
    </>
  )
}
