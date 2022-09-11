import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  padding: 0.25em 1em;
  border-radius: 10px;
  margin: 0.25em 0;

  border: 2px outset black;
  background-color: ${(props) => props.bgColor || 'palevioletred'};
  color: white;

  &:hover {
    background: #f3616b;
  }
`

export default Button
