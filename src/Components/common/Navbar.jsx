import React from 'react'
import { navLinks } from './Navbar.data'

const Navbar = () => {
  return (
    <header className='w-[50%] m-auto bg-[linear-gradient(rgb(33,33,33)_0%,rgb(20,20,20)_100%)] rounded-4xl py-4 px-5 border-5 border-[#242424] mt-5'>
        <div className='flex items-center justify-between'>
        <div>
            <a href="https://www.wallofportfolios.in/portfolios/viha-shah/">
            <h1 className='text-white font-extrabold'>DESIGNED BY VIHA</h1>
            </a>
        </div>
        <nav>
            <ul className='list-none flex items-center gap-2.5 cursor-pointer'>
                {navLinks.map((item) => (
                    <li key={item.id} className='text-gray-400 hover:text-white transition-all duration-500 font-extralight'>{item.title}</li>
                ))}
            </ul>
        </nav>

        </div>
    </header>
  )
}

export default Navbar