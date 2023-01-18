import React from 'react'
import { NavLinks, Logo } from '../components'
import { AiOutlineClose } from 'react-icons/ai'
import Wrapper from '../wrappers/SmallSidebar'

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className='container show-sidebar'>
        <div className='content'>
          <button className='close-btn'>
            <AiOutlineClose />
          </button>
          <Logo />
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
