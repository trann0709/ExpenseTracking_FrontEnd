import React from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSidebar, BigSidebar, Navbar } from '../../components'
import Wrapper from '../../wrappers/SharedLayout'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
