import React from 'react'
import { Link } from 'react-router-dom'
//Styled Components
import Container from '../../server/public/styledComponents/Container'
import Row from '../../server/public/styledComponents/Row'
import Button from '../../server/public/styledComponents/Button'
import { Title } from '../../server/public/styledComponents/Title'

export default function Login() {
  return (
    <>
      <Container>
        <Row>
          <Title fontSize={'2.5rem'}>My Wine Journey</Title>
          <Link to="/Home">
            <Button>Enter</Button>
          </Link>
        </Row>
      </Container>
    </>
  )
}
