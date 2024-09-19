import React from 'react'

const ImageCarrouselJamcrudo = (props) => {
  return (
      <div className='w-full h-56 p-3 mb-12 rounded-md md:h-80'>
          <img className='w-full h-full rounded-xl md:hover:shadow-2xl' src={props.image} alt="" />
      </div>
  )
}

export default ImageCarrouselJamcrudo;