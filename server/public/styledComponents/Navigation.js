import styled from 'styled-components'
import { Link } from 'react-router-dom'

// font-family: 'Oswald', sans-serif;
// font-family: 'Trirong', serif;
const Header = styled.header`
  display: flex;
  background-color: #9f0048;
`
const StyledNav = styled.nav`
  width: 100%;
  height: max-content;
  position: relative;

  /* border: 2px solid green; */
`

const Logo = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
  /* border: 3px solid yellow; */

  & #logo {
    /* border: 2px solid red; */
    font-size: 1.5rem;
    margin: 0;
    font-family: 'Trirong', serif;
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    & #logo {
      /* border: 2px solid red; */
      font-size: 1.75rem;
    }
  }
`

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({ navOpen }) => (navOpen ? 'max-content' : '0')};
  transition: max-height 0.3s ease-in;
  width: 100%;
  padding: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    overflow: visible;
    align-items: center;
    width: 80%;

    /* border: 2px solid yellow; */
    margin: 1.5em auto;
  }
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
  cursor: pointer;
  padding: 1rem 1rem;
  text-align: center;
  text-decoration: none;
  list-style: none;
  transition: all 0.3s ease-in;

  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
    padding: 0.9rem;
  }
`

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: 1.125rem;
  text-decoration: none;
  color: black;
  &&.nav-link {
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
  }
`

export { Header, StyledNav, NavMenu, NavToggle, MenuItem, StyledLink, Logo }
