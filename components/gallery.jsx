// Gallery

import React from 'react'
import Image from 'next/image'

const galleryImages = [
    {
        id: "1",
        mobileImage: "/images/mobile/image-gallery-milkbottles.jpg",
        desktopImage: "/images/desktop/image-gallery-milkbottles.jpg",
    },
    {
        id: "2",
        mobileImage: "/images/mobile/image-gallery-orange.jpg",
        desktopImage: "/images/desktop/image-gallery-orange.jpg",
    },
    {
        id: "3",
        mobileImage: "/images/mobile/image-gallery-cone.jpg",
        desktopImage: "/images/desktop/image-gallery-cone.jpg",
    },
    {
        id: "4",
        mobileImage: "/images/mobile/image-gallery-sugar-cubes.jpg",
        desktopImage: "/images/desktop/image-gallery-sugarcubes.jpg",
    },
]
const Gallery = () => {
  return (

    <div className='w-full h-1/2 justify-center items-center'>

        <div className='hidden lg:grid lg:grid-cols-4 '>
            {galleryImages.map((gallery) => (
                <Image
                key={gallery.id}
                width={100}
                height={100}
                src={gallery.desktopImage}
                alt='gallery images'
                className='w-full bg-cover'
                />
            ))}
            
        </div>

        <div className='w-full grid grid-cols-2'>
            {galleryImages.map((gallery) => (
                <Image
                key={gallery.id}
                width={100}
                height={100}
                src={gallery.mobileImage}
                alt='gallery images'
                className='w-full flex lg:hidden bg-cover'
                />
            ))}
            
        </div>

    </div>
  )
}

export default Gallery