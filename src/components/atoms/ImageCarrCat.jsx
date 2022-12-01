import React from 'react'

const ImageCarrCat = (props) => {
  return (
      <div className='w-auto h-auto p-3'>
          <img className='w-3/4 rounded-xl h-3/4' src={props.image} alt="" />
      </div>
  )
}

export default ImageCarrCat