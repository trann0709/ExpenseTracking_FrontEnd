import React from 'react'
import { Logo, NavLinks } from './'
import Wrapper from '../wrappers/BigSidebar'

const BigSidebar = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='content'>
          <Logo />
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
