import React, { useState } from 'react'
import { Grid3x3, List } from 'lucide-react'
import { GoArrowUpRight } from 'react-icons/go'
import Card1 from '../cards/Card1'
import Footer from "../component/Footer";
import WorkSection from '../section/Work';
const Work = () => {
  const [viewMode, setViewMode] = useState('grid')

  return (
    <section className="bg-[#161616] text-white w-full">
      {/* Hero Section */}
      <div className="px-6 py-24 space-y-5">
        <h1 className="uppercase text-[20px] font-medium">work</h1>
        <h2 className="text-[42px] font-medium leading-tight">
          The Magic We've Made <br />
          Let our portfolio inspire you
        </h2>
        <p className="text-[#b5b5b5]">
          A look at the captivating design, seamless functionality, and brand stories
          <br />
          brought to life through our digital magic.
        </p>
        <button className="bg-[#FDD26E] text-black w-44 h-12 flex items-center justify-center gap-2 rounded-full">
          Let’s Collaborate <GoArrowUpRight />
        </button>
      </div>

      {/* Portfolio Section */}
      <div className="px-6 mt-16">
        <header className="border-b border-neutral-800 bg-[#161616]/95 backdrop-blur-sm">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-2 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">
                Marlupi Dance Academy
              </h1>
              <a
                href="#"
                className="ml-2 opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Open external link"
              >
                <GoArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-neutral-200 text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-label="Grid view"
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-neutral-200 text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Render Cards */}
        <div className="w-full mt-10 h-auto">
          <Card1 viewMode={viewMode} />
           <WorkSection />
        <Footer />
        </div>
      </div>
     
    </section>
  )
}

export default Work
