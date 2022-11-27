import React from 'react'
import "../estilos/estilos.css"
import promo from "../../graphics/imagenes/Varios/imgpromocion.jpg"
import "../estilos/estilos.css"



const Seccion5 = () => {
  return (
    
    <div id='promociones' className='flex flex-col items-center justify-center w-auto h-auto gap-3 py-10 bg-white md:flex-row'>
        <h2 className='p-3 mt-8 capitalize md:mt-3 text-skinColor estilos-h2'>variedades</h2>
        <div className='p-5 text-base font-normal text-fontSecondary md:w-1/3'>
            <h2 className='uppercase estilos-h3'>nuestras presentaciones</h2>
            <br />
            <br />
            <h3 className='p-3 estilos-h5 text-navbarColor'>kit unidad</h3>
            <p className='p-3 seccion-p'>🔸El producto de su marca preferida</p>
            <br />
            <h3 className='p-3 estilos-h5 text-navbarColor'>kit accesorios</h3>
            <p className='p-3 seccion-p'>🔸El producto con soporte mas un vino o cuchillo</p>
            <br />
            <h3 className='p-3 estilos-h5 text-navbarColor'>kit de corte</h3>
            <p className='p-3 seccion-p'>🔸El producto mas soporte, vino, cuchillo, caja  y dos copas</p>
            <br />
        </div>
        <img src={promo} alt="jamónxjamón-promo" className='w-1/2 rounded-md shadow-md md:w-1/4 md:h-1/4'/>
    </div>
  )
}

export default Seccion5

