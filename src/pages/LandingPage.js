import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import investment from '../images/investment.svg'
import transfer from '../images/transfer.svg'

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='section-center'>
        <div className='info'>
          <h1>expense tracker</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            dicta eaque minus ab ullam enim.
          </p>
        </div>
        <div className='image-container'>
          <img src={investment} alt='tracking_1' className='main' />
          <img src={transfer} alt='tracking_2' className='accent' />
        </div>
      </div>
    </Wrapper>
  )
}

export default LandingPage

const Wrapper = styled.main`
  .image-container {
    display: block;
    .main {
      height: 400px;
      transform: scaleX(-1);
      width: 100%;
    }
    .accent {
      height: 200px;
    }
  }
`
