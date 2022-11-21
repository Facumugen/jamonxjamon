
import React from 'react'
import FooterLinkIcon from '../atoms/FooterLinkIcon'

import logoEmail1 from '../../graphics/imagenes/iconos/iconoEmail1.png'
import logoFacebook1 from '../../graphics/imagenes/iconos/iconoFacebook1.png'
import logoInstagram1 from '../../graphics/imagenes/iconos/iconoInstagram1.png'
import logoWhatsapp1 from '../../graphics/imagenes/iconos/iconoWhatsapp1.png'




const FooterLinkContainer = () => {
  return (
    <div className='flex flex-row justify-end w-auto h-auto md:flex-row md:flex-wrap'>
        <FooterLinkIcon icono={logoEmail1} link="https://www.google.com.ar/?hl=es"/>
        <FooterLinkIcon icono={logoFacebook1} link="https://www.facebook.com/" />
        <FooterLinkIcon icono={logoInstagram1} link="https://www.instagram.com/" />
        <FooterLinkIcon icono={logoWhatsapp1} link= "https://www.whatsapp.com/"/>           
    </div>
  )
}

export default FooterLinkContainer