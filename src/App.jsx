import React, { useEffect } from "react"
import './index.css'
import solarVideo from './assets/solar_video.mp4'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import NavBar  from './components/NavBar'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  const [typeEffect, { wordIndex }] = useTypewriter({
    words: ['Lower bills, smaller footprint—Go Solar for a Brighter Future.',
            'A Smart Investment Today, a lasting legacy Tomorrow.',
            'Choose Solar—Save Money and The Planet.',
            'Clean, Affordable Energy for Responsible Citizens.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40
  })

  const colors = ['text-orange-500', 'text-green-500', 'text-blue-500', 'text-yellow-500']
  
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-50">
          <NavBar />
        </div>

        <video
          src={solarVideo}
          autoPlay
          loop
          muted
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div data-aos="fade-down" className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="w-full text-center">
            <div className="h-full">
              <div className="flex items-center justify-center">
                <h1 className="text-3xl md:text-7xl bg-clip-text m-3 text-transparent bg-gradient-to-r from-orange-400 to-green-500 font-extrabold">
                  Why Solar? <br />
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <h1 className="h-full text-3xl md:text-6xl bg-clip-text m-3 text-transparent bg-gradient-to-r from-white to-yellow-600 font-extrabold">
                  {typeEffect}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex bg-gradient-to-t from-transparent to-[#001427]">
        <Services />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Contact />
      </section>

    </>
  )
}

export default App
