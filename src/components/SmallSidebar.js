import React from 'react'
import styled from 'styled-components'

const SmallSidebar = () => {
  return <Wrapper>small sidebar</Wrapper>
}

export default SmallSidebar

const Wrapper = styled.aside`
  @media (min-width: 1170px) {
    display: none;
  } ;
`
