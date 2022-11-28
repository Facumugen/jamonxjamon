import React from 'react'
import "../estilos/estilos.css"
import promo from "../../graphics/imagenes/Varios/imgpromocion.jpg"
import "../estilos/estilos.css"



const Seccion5 = () => {
  return (
    
    <div id='promociones' className='flex flex-col justify-center w-auto h-auto bg-white'>
        <div className='flex justify-center'>
            <h2 className='p-3 mt-16 capitalize md:mt-8 text-skinColor estilos-h2'>catálogo</h2>
        </div>
        <div className='flex flex-wrap w-auto h-auto py-6 md:justify-evenly md:flex-row'>
          <div className='w-3/4 ml-16 text-base font-normal h-1/2 text-fontSecondary lg:w-1/4 md:mt-8 sm:w-1/2 md:h-1/4'>
              <h3 className='uppercase md:mb-16 estilos-h3 text-secondaryColor'>presentación</h3>
              <br />
              <br />
              <h5 className='estilos-h5 text-navbarColor'>kit unidad</h5>
              <p className='p-1 seccion-p'>El producto de su marca preferida</p>
              <br />
              <h5 className='estilos-h5 text-navbarColor'>kit accesorios</h5>
              <p className='p-1 seccion-p'>El producto con soporte mas un vino o cuchillo</p>
              <br />
              <h5 className='estilos-h5 text-navbarColor'>kit de corte</h5>
              <p className='p-1seccion-p'>El producto mas soporte, vino, cuchillo, caja  y dos copas</p>
              <br />
          </div>
          <div className='w-full h-full p-10 md:p-4 md:w-1/2 lg:w-1/4 lg:h-1/4 sm:mt-4 md:mt-auto'>
            <img src={promo} alt="jamónxjamón-promo" className='rounded-md md:shadow-md h-1/4 w-96'/>
          </div>
        </div>
    </div>
  )
}

export default Seccion5

