import React, { useState } from 'react'

import {
  Header,
  StyledNav,
  NavMenu,
  NavToggle,
  MenuItem,
  StyledLink,
  Logo,
} from '../../server/public/styledComponents/Navigation'
import { FaTimes, FaBars } from 'react-icons/fa'

export default function Nav() {
  //setting state for mobile icon
  const [navOpen, setNavOpen] = useState(false)

  function handleClick() {
    setNavOpen(!navOpen)
  }

  return (
    <Header>
      <StyledNav>
        <Logo>
          <StyledLink to="/Home" id="logo">
            My Wine Journey
          </StyledLink>
          <NavToggle onClick={handleClick}>
            <span>{navOpen ? <FaTimes /> : <FaBars />}</span>
          </NavToggle>
        </Logo>
        <NavMenu navOpen={navOpen}>
          <MenuItem>
            <StyledLink to="/Home" className="nav-link">
              Home
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/Quiz" className="nav-link">
              Quiz
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/Notes" className="nav-link">
              Notes
            </StyledLink>
          </MenuItem>
        </NavMenu>
      </StyledNav>
    </Header>
  )
}
