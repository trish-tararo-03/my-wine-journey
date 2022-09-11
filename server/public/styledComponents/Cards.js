import styled from 'styled-components'

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 90%;
  padding: 0.5em;
  margin: 0.5em auto;
  /* border: 1px solid #91971d; */
  background-color: #f7f5dd;

  &#quiz-card {
    font-family: 'Oswald', sans-serif;
  }
`
