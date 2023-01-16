import React from 'react'
import Logo from '../components/Logo'
import investment from '../images/investment.svg'
import transfer from '../images/transfer.svg'
import Wrapper from '../wrappers/Landing'

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo className='logo' />
      </nav>
      <div className='section-center page'>
        <div className='info'>
          <h1>expense tracker</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            consequuntur facere, quaerat quae reiciendis tenetur placeat
            consectetur? Nemo officia obcaecati unde sapiente atque, minima
            doloribus recusandae, fuga quae est doloremque.
          </p>
          <button className='btn'>sign in / register</button>
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
