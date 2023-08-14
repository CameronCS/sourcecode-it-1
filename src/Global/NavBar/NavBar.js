import React from 'react'

import "./NavBar.css"
import NavNeonButton from './Components/NavNeonButton'

export default function NavBar({ HomeClick, ServiceClick, ContactClick }) {
  return (
    <header className='header'>
      <div className='img-wrapper'>
        <img src='/assets/logo.png' className='nav-logo' alt='scit-logo' />
      </div>
      <nav className='main-nav'>
        <div className='link-holder'>
          <NavNeonButton
            ctx="Home"
            color={0} 
            key={0x00000000}
            onPress={HomeClick}
          />
          <NavNeonButton
            ctx="Services"
            color={1}
            key={0x00000001}
            onPress={ServiceClick}
          />
          <NavNeonButton
            ctx="Contact Us"
            color={2}
            key={0x00000002}
            onPress={ContactClick}
          />
        </div>
      </nav>
    </header>
  )
}
