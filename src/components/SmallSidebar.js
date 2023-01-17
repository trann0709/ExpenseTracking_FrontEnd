import React from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'

const SmallSidebar = () => {
  return (
    <Wrapper>
      <AiOutlineMenu />
    </Wrapper>
  )
}

export default SmallSidebar

const Wrapper = styled.aside`
  @media (min-width: 1170px) {
    display: none;
  } ;
`
