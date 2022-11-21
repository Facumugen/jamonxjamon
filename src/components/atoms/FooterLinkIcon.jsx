
import React from 'react'

const FooterLinkIcon = (props) => {

  return (
    <>
    <a className='self-center' href={props.link}> <img className='w-16 px-2 md:hover:scale-125 md:transition md:duration-300 md:ease-in-out' src={props.icono} alt="imagen" /></a>
    </>
  )
}

export default FooterLinkIcon