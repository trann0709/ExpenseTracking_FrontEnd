import React from 'react'
import styled from 'styled-components'
import { AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai'
import { useUserContext } from '../context/user_context'

const Navbar = () => {
  const { myUser } = useUserContext()
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn'>
          <AiOutlineMenu />
        </button>
        <h4>hello, {myUser}</h4>
        <div className='btn-container'>
          <button type='button'>
            <AiOutlineSetting />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  background: var(--primary-600);
  height: var(--nav-height);
  box-shadow: var(--shadow-2);
  color: var(--grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  background: blue;
  .nav-center {
    display: flex;
    align-items: center;
    width: 90vw;
  }
`
