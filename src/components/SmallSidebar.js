import React from 'react'
import styled from 'styled-components'

const SmallSidebar = () => {
  return <Wrapper>SmallSidebar</Wrapper>
}

export default SmallSidebar

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  } ;
`
