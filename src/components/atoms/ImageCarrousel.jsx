


import React from 'react'

const ImageCarrousel = (props) => {
  return (
      <div className='w-full h-56 p-4 mb-16 rounded-md md:h-72'>
          <img className='w-full h-full rounded-xl' src={props.image} alt="" />
      </div>
  )
}

export default ImageCarrousel