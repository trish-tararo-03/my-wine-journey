import React from 'react'
import { Link } from 'react-router-dom'
//Styled Components
import Container from '../../server/public/styledComponents/Container'
import Row from '../../server/public/styledComponents/Row'
import Button from '../../server/public/styledComponents/Button'

export default function Login() {
  return (
    <>
      <Container>
        <Row>
          <h1>My Wine Journey</h1>
          <Link to="/Home">
            <Button>Enter</Button>
          </Link>
        </Row>
      </Container>
    </>
  )
}
