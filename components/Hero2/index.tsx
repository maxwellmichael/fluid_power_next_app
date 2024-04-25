import Link from 'next/link'
import React from 'react'

export default function Hero2() {
  return (
   
<section
  className="relative bg-[url(/images/hero/hero-banner-1.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 sm:bg-gradient-to-r"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h3 className='text-xl mb-2'><span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark"><span className='text-primary'>Fluid Power</span> Technical Services</span></h3>
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      <span className="text-stroke relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
      Create, Enhance &amp; Sustain
      </span>
      </h1>

      <p className="mt-4 max-w-lg sm:text-lg/relaxed text-socialicon">
      We, Fluid Power, are based out of the UAE. We possess state-of-the-art technology and years of expertise necessary to repair and maintain all kinds of hydraulic equipment.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          href="/contact"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Contact Us
        </Link>

        {/* <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a> */}
      </div>
    </div>
  </div>
</section>
  )
}
