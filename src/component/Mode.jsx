import React, { useEffect, useState } from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

const Mode = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  return (
    <div className='border h-11 w-26 flex items-center justify-center rounded-full border-[#fdd26ece] text-[#fdd26efe]'>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 hover:opacity-80 transition"
      >
        {darkMode ? (
          <span className='flex gap-4  items-center'>
            Dark <IoMoonOutline className='w-8 h-8 p-1 bg-[#fdd26e] rounded-full text-black'/>
          </span>
        ) : (
          <span className='flex gap-4 justify-center items-center'>
            <IoSunnyOutline /> Light
          </span>
        )}
      </button>
    </div>
  )
}

export default Mode
