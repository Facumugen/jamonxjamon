


import React from 'react'

const ImageCarrousel = (props) => {
  return (
      <div className='items-center p-3 h-96'>
          <img className='w-full h-3/4' src={props.image} alt="" />
      </div>
  )
}

export default ImageCarrousel