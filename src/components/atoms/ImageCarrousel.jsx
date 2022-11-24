


import React from 'react'

const ImageCarrousel = (props) => {
  return (
    <div className='flex items-center w-full h-full bg-white border-black rounded-sm'>
        <img className='w-full' src={props.image} alt="" />
        </div>
  )
}

export default ImageCarrousel