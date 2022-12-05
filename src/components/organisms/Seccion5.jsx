import React from 'react'
import CarrouselCat from '../molecules/CarrouselCat'
import "../estilos/estilos.css"




const Seccion5 = () => {
  return (
    
    <div id='promociones' className='flex flex-col justify-center w-auto h-auto bg-white'>
        <div className='flex justify-center'>
            <h2 className='p-3 mt-16 capitalize md:mt-8 text-skinColor estilos-h2'>catálogo</h2>
        </div>
        <div className='flex flex-col justify-center w-auto h-auto py-6 lg:flex-row'>
          <div className='w-3/4 h-auto mt-8 ml-12 text-base font-normal md:w-1/2 sm:ml-48 lg:ml-0 md:p-12 text-fontSecondary'>
              <h3 className='uppercase md:mb-16 estilos-h3 text-secondaryColor'>presentación</h3>
              <br />
              <br />
              <h5 className='estilos-h5 text-navbarColor'>kit unidad <br/>
              <span className='text-xl text-darkSecondary'> (13/24 meses de estacionamiento)</span>
              </h5>
              <p className='p-1 mt-6 seccion-p'>El producto de su marca preferida</p>
              <br />
              <h5 className='mt-5 estilos-h5 text-navbarColor'>kit accesorios <br/>
              <span className='text-xl text-darkSecondary'> (13/24 meses de estacionamiento)</span>
              </h5>
              <p className='p-1 mt-6 seccion-p'>El producto con el soporte mas un vino o cuchillo</p>
              <br />
              <h5 className='mt-5 estilos-h5 text-navbarColor'>kit de corte <br/>
              <span className='text-xl text-darkSecondary'> (13/24 meses de estacionamiento)</span>
              </h5>
              <p className='p-1 mt-6 seccion-p'>El producto mas el soporte, vino, cuchillo, caja  y dos copas</p>
              <br />
          </div>
          <div className='w-3/4 mt-28 ml-14 sm:ml-32 lg:ml-0 h-1/2 sm:w-1/2 sm:h-1/4 md:w-3/4 md:h-3/4 lg:w-1/4 lg:h-1/4'>
            <CarrouselCat />
          </div>
        </div>
    </div>
  )
}

export default Seccion5

