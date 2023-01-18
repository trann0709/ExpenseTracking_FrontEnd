import React from 'react'
import { Logo, NavLinks } from './'
import Wrapper from '../wrappers/BigSidebar'
import { useExpenseContext } from '../context/expense_context'

const BigSidebar = () => {
  const { isSidebarOpen } = useExpenseContext()
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'container show-sidebar' : 'container'}>
        <div className='content'>
          <Logo />
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
