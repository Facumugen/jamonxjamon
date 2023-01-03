import React from 'react'
import CarrouselCat from '../molecules/CarrouselCat'
import "../estilos/estilos.css"




const Catálogo = () => {
  return (
    
    <div id='catálogo' className='flex flex-col justify-center w-auto h-auto overflow-hidden bg-white'>
        <div className='flex justify-center'>
            <h2 className='p-3 mt-16 capitalize md:mt-8 text-skinColor estilos-h2'>catálogo</h2>
        </div>
        <div className='flex flex-col justify-center w-auto h-auto py-6 md:flex-row'>
          <div className='w-3/4 h-auto p-5 mt-10 text-base font-normal sm:w-1/2 ml-11 md:ml-0 sm:ml-32 md:w-1/3 lg:w-1/2 md:p-8 text-fontSecondary'>
              <h3 className='uppercase md:mb-10 estilos-h3 text-secondaryColor'>presentación</h3>
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
          <div className='w-4/6 ml-16 sm:ml-48 mt-11 lg:ml-0 h-1/2 sm:w-2/4 sm:h-2/4 md:w-2/4 md:h-3/5 md:max-w-xs lg:h-2/6'>
            <CarrouselCat />
          </div>
        </div>
    </div>
  )
}

export default Catálogo;

