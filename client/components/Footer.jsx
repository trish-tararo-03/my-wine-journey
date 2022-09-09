import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

import {
  StyledFooter,
  Copyright,
  Wrapper,
} from '../../server/public/styledComponents/Footer'

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Wrapper>
          <FaRegCopyright />
          <Copyright> Moonlit Coder 2022</Copyright>
        </Wrapper>
      </StyledFooter>
    </>
  )
}
