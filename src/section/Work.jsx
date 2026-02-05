import React from 'react'
import { FiColumns } from 'react-icons/fi'
import { IoReorderFourOutline } from 'react-icons/io5'
import { PiGridFour, PiGridNineLight } from 'react-icons/pi'

// Images
import Icon1 from '../assets/Icon1.png'
import Icon2 from '../assets/Icon2.png'
import Icon3 from '../assets/Icon3.png'
import Icon4 from '../assets/Icon4.png'
import Icon5 from '../assets/Icon5.png'
import Icon6 from '../assets/Icon6.png'
import Icon7 from '../assets/Icon7.png'
import Icon8 from '../assets/Icon8.png'
import Icon9 from '../assets/Icon9.png'
import Icon10 from '../assets/Icon10.png'
import Icon11 from '../assets/Icon11.png'
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.avif'
import img4 from '../assets/img4.avif'
import img5 from '../assets/img5.avif'

const workItems = [
  { id: '01', title: 'Summer Collection', image: Icon1 },
  { id: '02', title: 'Mobile App Design', image: Icon2 },
  { id: '03', title: 'Training Program', image: Icon3 },
  { id: '04', title: 'Studio Branding', image: Icon4 },
  { id: '05', title: 'Performance Video', image: Icon5 },
  { id: '06', title: 'Exhibition Design', image: Icon6 },
  { id: '07', title: 'Workshop Materials', image: Icon7 },
  { id: '08', title: 'Community Events', image: Icon8 },
  { id: '09', title: 'Exhibition Design', image: Icon9 },
  { id: '10', title: 'Workshop Materials', image: Icon10 },
  { id: '11', title: 'Community Events', image: Icon11 },
    { id: '12', title: 'Summer Collection', image: img1 },
  { id: '13', title: 'Mobile App Design', image: img2 },
  { id: '14', title: 'Training Program', image: img3 },
  { id: '15', title: 'Studio Branding', image: img4 },
  { id: '16', title: 'Performance Video', image: img5 },
]

const Work = () => {
  return (
    <section className="w-full bg-[#161616] text-white px-6 py-12">

      {/* Header */}
      <div className=" pb-4 mb-10">
        <h1 className="text-[20px] font-medium border-b border-[#2b2b2b] py-6">Our Work</h1>

        <div className="flex flex-col justify-between  mt-4">
          <p className="text-[22px] text-[#b5b5b5]">Selected Work</p>

          {/* View Icons */}
          <div className="flex items-center gap-4 text-[#727171]">
            <PiGridNineLight size={26} className="cursor-pointer hover:text-white transition" />
            <PiGridFour size={24} className="cursor-pointer hover:text-white transition" />
            <FiColumns size={21} className="cursor-pointer hover:text-white transition" />
            <IoReorderFourOutline size={24} className="cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-[14px] overflow-hidden bg-[#222] cursor-pointer"
          >
            <div className="w-full aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <p className="text-sm text-[#777]">MARUPI {item.id}</p>
              <h3 className="font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Work
