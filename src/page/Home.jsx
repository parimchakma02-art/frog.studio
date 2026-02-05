import React from 'react'
import Hero from '../section/Hero'
import Work from '../section/Work'
import Design from '../section/Design'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
    <div>
      <Hero />
        <Work />
       <Design />
       <Footer />
    </div>
    </>
  )
}

export default Home