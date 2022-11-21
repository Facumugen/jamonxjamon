import React from 'react'
import imagenSec5 from '../../graphics/imagenes/Varios/images2.jpg'



const Seccion5 = () => {
  return (
    
    <div className='flex flex-col items-center w-full h-auto gap-3 p-8 bg-white md:flex-row md:justify-center'>
        <img className='border-2 border-black rounded-md shadow-md h-96' src={imagenSec5} alt="" />
        <div className='text-base font-normal text-fontSecondary md:w-1/3'>
            <h3 className='text-2xl font-bold'>El encabezado de tu seccion va acá</h3>
            <br />
            <br />
            <h5 className='text-lg font-bold'>Tu idea principal va acá</h5>
            <p>Solo ahi espacio para algunas lineas de texto, asegurate de transmitir tu mensaje de manera clara y concisa</p>
            <br />
            <h5 className='text-lg font-bold'>Tu idea principal va acá</h5>
            <p>Solo ahi espacio para algunas lineas de texto, asegurate de transmitir tu mensaje de manera clara y concisa</p>
            <br />
            <h5 className='text-lg font-bold'>Tu idea principal va acá</h5>
            <p>Solo ahi espacio para algunas lineas de texto, asegurate de transmitir tu mensaje de manera clara y concisa</p>
            <br />
        </div>
    </div>
  )
}

export default Seccion5

