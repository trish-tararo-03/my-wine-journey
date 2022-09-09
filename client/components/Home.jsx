import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../../server/public/styledComponents/Container'
import Row from '../../server/public/styledComponents/Row'
import Title from '../../server/public/styledComponents/Title'
import { Subtitle } from '../../server/public/styledComponents/Subtitle'
import { Cards } from '../../server/public/styledComponents/Cards'
import { Paragraph } from '../../server/public/styledComponents/Paragraph'
import Button from '../../server/public/styledComponents/Button'

export default function Home() {
  return (
    <Container>
      <Row>
        <Title fontSize="2rem">Welcome to your Wine Journey</Title>
        <Subtitle fontsize="1.5rem">How It Works</Subtitle>
        <Cards>
          <Subtitle fontSize="1.25rem">Learn</Subtitle>
          <Paragraph>Test your wine knowledge with a quiz!</Paragraph>
          <Button>Take the Quiz</Button>
        </Cards>
      </Row>
    </Container>
  )
}
