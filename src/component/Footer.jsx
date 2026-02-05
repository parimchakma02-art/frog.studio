import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'

const Footer = () => {
  return (
    <section className="w-full bg-[#161616] text-white">
      
      {/* CTA Section */}
      <div className="w-full h-screen flex items-center px-6 border-b border-[#575656]">
        <div className="w-full h-[50vh] bg-[#00241B] rounded-[12px] flex flex-col justify-center px-8">
          <h1 className="text-[40px] font-medium">
            Ready to Jumpstart Your Brand?
          </h1>

          <p className="text-[#737373] text-[40px] font-medium mt-2">
            Let's Create Some Magic <br /> Disco Frog Studio
          </p>

          <button className="bg-[#FDD26E] text-black w-40 h-10 
                             flex items-center justify-center gap-2 
                             rounded-full mt-8 font-medium">
            Get In Touch <GoArrowUpRight />
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full h-[70vh]">
        <div className="w-full h-[80%] flex justify-between px-6">
          
          {/* Brand + Socials */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[40px] uppercase font-medium">
              Disco Frog
            </h1>
            <div className="flex gap-4 text-[30px] mt-4">
              <FaInstagram />
              <CiLinkedin />
              <FaTiktok />
            </div>
          </div>

          {/* Locations */}
          <div className="flex gap-16 items-center">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Jakarta</span>
              <span>discofrogstudio@gmail.com</span>
              <span>Level 25, Revenue Tower</span>
              <span>District 8 SCBD</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-medium">Australia</span>
              <span>discofrogstudio@gmail.com</span>
              <span>199 William Street</span>
              <span>Melbourne, Australia</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full h-[20%] flex justify-center items-center">
          <h1 className="font-medium">
            Disco Frog — All Rights Reserved 2026
          </h1>
        </div>
      </div>

    </section>
  )
}

export default Footer
