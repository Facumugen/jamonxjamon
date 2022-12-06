
import React from 'react'
import FooterLinkIcon from '../atoms/FooterLinkIcon'

import logoEmail1 from '../../graphics/imagenes/iconos/iconoEmail1.png'
import logoFacebook1 from '../../graphics/imagenes/iconos/iconoFacebook1.png'
import logoInstagram1 from '../../graphics/imagenes/iconos/iconoInstagram1.png'
import logoWhatsapp1 from '../../graphics/imagenes/iconos/iconoWhatsapp1.png'
import "../estilos/estilos.css"




const FooterLinkContainer = () => {
  return (
   <div>
      <div className='p-4 capitalize text-secondaryColor footer-h3'>
        <h3>contactanos:</h3>
      </div>
      <div className='flex flex-row justify-end w-auto h-auto p-3 md:flex-row md:flex-wrap'>
        <FooterLinkIcon icono={logoEmail1} link="mailto:jamonxjamonargentina@gmail.com"/>
        <FooterLinkIcon icono={logoFacebook1} link="https://www.facebook.com/jamonxjamonargentina/"/>
        <FooterLinkIcon icono={logoInstagram1} link="https://www.instagram.com/frimar_jamones_/?next=%2F" />
        <FooterLinkIcon icono={logoWhatsapp1} link= "https://api.whatsapp.com/send?phone=5491131887257&text=Hola,"/>           
      </div>
    </div>
  )
}

export default FooterLinkContainer