import React, { useState } from 'react'
import { navLinks } from './Navbar.data'
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {

    const [menu,setMenu] = useState(false);

  return (
    <header className='w-[44%] fixed top-10 left-1/2 -translate-x-1/2 bg-[linear-gradient(rgb(33,33,33)_0%,rgb(20,20,20)_100%)] rounded-4xl py-4 px-5 border-5 border-[#242424] z-50'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between relative'>
        <div className='flex items-center justify-between'>
            <a href="https://www.wallofportfolios.in/portfolios/viha-shah/">
            <h1 className='text-white font-medium text-sm md:text-[16px] md:font-extrabold'>DESIGNED BY VIHA</h1>
            </a>
        <CiMenuBurger className='text-white md:hidden text-xl' onClick={() => setMenu((prev) => !prev)}/>
        </div>
        <nav className={`${menu ? "max-md:max-h-30 max-md:mt-6" : "max-md:max-h-0"} overflow-hidden md:overflow-visible md:block transition-all duration-700`}>
            <ul className='flex flex-col gap-2 md:list-none md:flex-row md:items-center md:gap-2.5 md:cursor-pointer'>
                {navLinks.map((item) => (
                    <li key={item.id} className='text-gray-400 hover:text-white transition-all duration-500 font-extralight text-sm md:text-[16px]'>{item.title}</li>
                ))}
            </ul>
        </nav>

        </div>
    </header>
  )
}

export default Navbar