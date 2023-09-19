
import React from 'react'
import Logo from './Logo'
import Navlinks from './Navlinks'




const Navbar = () => {
  return (
    <header className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        <Logo />
        <Navlinks />
      </div>
    </header>
  )
}

export default Navbar