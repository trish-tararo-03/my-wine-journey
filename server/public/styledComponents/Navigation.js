import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
  display: flex;
`
const StyledNav = styled.nav`
  /* border: 2px solid green; */
  width: 100%;
  height: max-content;
  position: relative;
`

const Logo = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
  /* border: 3px solid yellow; */
`

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({ navOpen }) => (navOpen ? 'max-content' : '0')};
  transition: max-height 0.3s ease-in;
  width: 100%;
  padding: 0;
`

const NavToggle = styled.button`
  cursor: pointer;
  border: 0;
  width: 3em;
  height: 3em;
  padding: 0em;
  border-radius: 50%;
  background-color: transparent;
  transition: opacity 250ms ease;
  position: absolute;
  left: 10px;

  &:hover,
  &:focus {
    opacity: 0.75;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const MenuItem = styled.li`
  padding: 1rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  list-style: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-weight: 600;
`

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: 1.125rem;
`

export { Header, StyledNav, NavMenu, NavToggle, MenuItem, StyledLink, Logo }
