import React from 'react'
import error from '../images/error.svg'
import Logo from '../components/Logo'
import Wrapper from '../wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='section-center page error-page'>
        <div>
          <img src={error} alt='error' className='error-img' />
          <h3>page not found</h3>
          <button className='btn error-btn'>back to the main page</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Error
