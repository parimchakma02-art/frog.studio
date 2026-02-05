import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Mode from '../component/Mode'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true)



  return (
  <>
       <nav
      className={`w-full h-[14vh] sticky top-4 z-20 flex items-center px-6 transition-colors
      ${darkMode ? "bg-[#161616] text-white" : "bg-white text-black"}`}
    >
      {/* Logo */}
      <div className="uppercase font-medium text-xl">
        Disco Frog
      </div>

      {/* Links */}
      <div className="flex gap-6 mx-auto">
    
          <Link to="/" className="px-4 py-2 rounded-lg cursor-pointer
              hover:bg-[#332A16] hover:text-[#c2ab79]
              transition">
        Home
          </Link>
          <Link to="work" className="px-4 py-2 rounded-lg cursor-pointer
              hover:bg-[#332A16] hover:text-[#c2ab79]
              transition">
       Work 
          </Link>
          <Link to="about" className="px-4 py-2 rounded-lg cursor-pointer
              hover:bg-[#332A16] hover:text-[#c2ab79]
              transition">
        About
          </Link>
      
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <Mode darkMode={darkMode} setDarkMode={setDarkMode} />

        <button className="flex px-2 items-center gap-2 hover:translate-x-1 transition w-42 h-12  rounded-full bg-[#4c3f22]  text-black">
          
          <span className="h-9 w-9  flex items-center justify-center bg-[#fdd26e] text-black rounded-full">
            <FaArrowRight />
          </span>
          <span className="text-[18px] text-[#e1bc64] ">Book a call</span>
        </button>
      </div>
    </nav>
  </>
  )
}

export default Navbar
