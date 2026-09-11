import React from 'react'
import Animated from '../components/Animated'

const About = () => {
  return (
    <div>
        <section id="about" className="px-auto mt-44">
             <div className='flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto'>
                     {/* {left side:main image} */}

                      <Animated scale={0.8} y={0}>

                        <img src="/assets/about.png" alt="DIsh" className="max-w-137 w-full h-full object-cover rounded-3xl"/>
                             
                      </Animated>


                     {/* {right side content detail} */}

                      <div>

                           <Animated scale={0.8} y={0} className="flex items-center gap-2">

                             <img  src="/assets/iconL.png" alt="IconLeft"/>
                              <span className='font-medium uppercase'>
                                  Crafted with passion, served with love
                              </span>
                              <img src="/assets/iconR.png" alt="IconRight"/>
                             
                      </Animated>

                            <Animated >

                               <h2 className="mt-5 text-4xl md:text-5xl text-balance">
                                     Experience dining beyond expectations
                               </h2>
                             
                      </Animated>
                         <Animated delay={0.2}>

                              <p className="mt-4.5 text-zinc-600 max-w-sm">We combine fresh local ingredients,creative recipes and elegant presentation to deliver a memorable experience with every visit.</p>
                             
                      </Animated>
                      </div>
             </div>

        </section>
      
    </div>
  )
}

export default About
