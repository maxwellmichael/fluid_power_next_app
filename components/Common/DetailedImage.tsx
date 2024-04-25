import React from 'react'

export default function DetailedImage({src, text}:{src: string, text:string}) {
  return (
   
<figure className="relative max-w-sm transition-all duration-300 cursor-pointer">
  <a href="#">
    <img className="rounded-lg transition duration-300 ease-in-out hover:scale-110" src={src} alt="image description" />
  </a>
  <figcaption className="absolute px-4 md:text-lg text-white md:bottom-6 sm:text-sm sm:bottom-2">
      <p>{text}</p>
  </figcaption>
</figure>

  )
}
