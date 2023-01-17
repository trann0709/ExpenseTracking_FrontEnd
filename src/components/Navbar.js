import React from 'react'
import styled from 'styled-components'
import { AiOutlineSetting } from 'react-icons/ai'

const Navbar = () => {
  return (
    <Wrapper>
      <h4>hello, finn</h4>
      <AiOutlineSetting className='icon' />
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  background: var(--primary-600);
  height: 6rem;
  box-shadow: var(--shadow-2);
  width: 100vw;
  max-width: 100%;
  .icon,
  h4 {
    color: var(--grey-500);
  }
  h4 {
    text-align: center;
    /* min-width: calc(100vw - 250px);
    color: var(--grey-500); */
  }
  /* @media (max-width: 1170px) {
    h4 {
      min-width: 100vw;
    }
  } ; */
`
