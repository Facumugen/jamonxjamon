import React from 'react'
import banner from '../../graphics/imagenes/banners/banner.jpg'


function Banner(){
  return (
    <div className='flex justify-center w-full h-full md:bg-backgroundSeccion3'>
        <img className='w-full h-full' src={banner} alt="" />
    </div>
  )
}

export default Banner;