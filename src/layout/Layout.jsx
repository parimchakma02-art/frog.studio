

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'


const Layout = () => {

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)



    return (
        <>

            <main className='w-full h-full'>
                <div className='w-full h-full '>
                    <Navbar />
                </div>
                <div>
            <Outlet />
                </div>

            </main>

        </>
    )
}

export default Layout
