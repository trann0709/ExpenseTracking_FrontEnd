import React, { useState } from 'react'
import { AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai'
import { useExpenseContext } from '../context/expense_context'
import { useUserContext } from '../context/user_context'
import Wrapper from '../wrappers/Navbar'

const Navbar = () => {
  const { myUser } = useUserContext()
  const [showLogout, setShowLogout] = useState(false)
  const { toggleSidebar } = useExpenseContext()

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <AiOutlineMenu />
        </button>
        <h4>hello, {myUser}</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='setting'
            onClick={() => setShowLogout(!showLogout)}
          >
            <AiOutlineSetting />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn'>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
