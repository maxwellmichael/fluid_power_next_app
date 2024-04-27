import React from 'react'
import Slider2 from '../Slider2';

export default function Hero3() {

    const slides = [
        "/images/work/gear_box_2.jpg",
        "/images/work/site_work_1.jpg",
        "/images/work/site_work_2.jpg",
        "/images/work/accumulator_changing.jpg",
        "/images/work/gear_box_1.jpg",
        "/images/work/site_work_4.jpg",
    ];

  return (
    <section className="pt-18 mt-22 bg-gray-50 sm:pt-16">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">

            <p className="max-w-4xl mx-auto sm:mb-1 md:mb-4 sm:text-2xl md:text-2xl font-bold text-primary">
               Fluid Power Technical Services
            </p>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Create, Enhance &amp; Sustain</h1>
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600">
            Based in the UAE, We Fluid Power use cutting-edge technology and extensive expertise, enabling us to proficiently repair and maintain all types of hydraulic equipment.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <a href="/contact" title=""
                    className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">
                    Get Started
                </a>
               
            </div>
        </div>
    </div>
    <div className="bg-white">
        <div className="relative mx-auto mt-4 md:mt-8">
            <div className="lg:max-w-4xl lg:mx-auto">
                {/* <img className="px-4 md:mpx-8" src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac" /> */}
                {/* <Slider slides={slides} autoSlide /> */}
                <Slider2 images={slides}/>
                
            </div>
        </div>
    </div>
</section>
  )
}
