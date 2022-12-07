
import React from 'react'

const FooterLinkIcon = (props) => {

  return (
    <>
    <a className='self-center' target="_blank" rel="noopener noreferrer" href={props.link}> <img className='w-16 px-2 md:hover:scale-125 md:transition md:duration-300 md:ease-in-out' src={props.icono} alt="contacto" /></a>
    </>
  )
}

export default FooterLinkIcon