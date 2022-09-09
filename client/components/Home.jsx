import React from 'react'

import Container from '../../server/public/styledComponents/Container'
import Row from '../../server/public/styledComponents/Row'
import Title from '../../server/public/styledComponents/Title'
import { Subtitle } from '../../server/public/styledComponents/Subtitle'

export default function Home() {
  return (
    <Container>
      <Row>
        <Title fontSize="2rem">Welcome to your Wine Journey</Title>
        <Subtitle fontsize="1.5rem">How It Works</Subtitle>
      </Row>
    </Container>
  )
}
