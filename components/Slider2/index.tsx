'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Slider2({images}:{images:string[]}) {
  return (
    <section className='py-12 sm:mx-5 md:mx-0'>
      <div className='container'>
        <Swiper
          navigation
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ type: 'fraction' }}
          modules={[Autoplay, Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-[32rem] w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src={image}
                  alt=""
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}