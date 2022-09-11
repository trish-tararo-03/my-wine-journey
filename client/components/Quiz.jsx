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

  // const quizLength = 10

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
            <Subtitle>Wine Regions of New Zealand</Subtitle>
            <Paragraph>
              Test your knowledge about the different wine regions of New
              Zealand, and the different grape varieties each region is most
              known for
            </Paragraph>
            {quiz.map((element, i) => {
              const {
                questionId,
                question,
                choice1,
                choice2,
                choice3,
                choice4,
                rightChoice,
              } = element

              function handleChoiceClick(evt) {
                const choice = evt.target

                if (choice.textContent === rightChoice) {
                  choice.style.backgroundColor = 'green'
                  setScore(score + 1)
                }
                if (choice.textContent !== rightChoice) {
                  choice.style.backgroundColor = 'red'
                }
              }

              return (
                <>
                  <Cards key={i} id="quiz-card">
                    <Subtitle key={questionId}>
                      Question {questionId}/10
                    </Subtitle>
                    <Paragraph key={question}>{question}</Paragraph>

                    <Wrapper padding="1em">
                      <Button
                        type="button"
                        key={choice1}
                        onClick={handleChoiceClick}
                      >
                        {choice1}
                      </Button>
                      <Button key={choice2} onClick={handleChoiceClick}>
                        {choice2}
                      </Button>
                      <Button key={choice3} onClick={handleChoiceClick}>
                        {choice3}
                      </Button>
                      <Button key={choice4} onClick={handleChoiceClick}>
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
