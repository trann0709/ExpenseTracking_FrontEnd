import React from 'react'
import logo from '../utils/logo.svg'
import Wrapper from '../wrappers/Logo'

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt='logo' />
    </Wrapper>
  )
}

export default Logo
