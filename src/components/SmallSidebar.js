import React from 'react'
import { NavLinks, Logo } from '../components'
import { AiOutlineClose } from 'react-icons/ai'
import Wrapper from '../wrappers/SmallSidebar'
import { useExpenseContext } from '../context/expense_context'

const SmallSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useExpenseContext()
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'container show-sidebar' : 'container'}>
        <div className='content'>
          <button className='close-btn' onClick={toggleSidebar}>
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
