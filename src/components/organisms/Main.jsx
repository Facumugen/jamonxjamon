import React from 'react'
import Navbar from "./Navbar";
import "../estilos/estilos.css"

const Main = () => {
  return (
    <>
    
    <div style={{backgroundImage: "url(bgbanner/mainportada1.jpg)"}} id='inicio' className="flex flex-col h-auto min-w-full min-h-screen mt-0 bg-fixed bg-center bg-no-repeat bg-cover md:justify-between">
        <Navbar/>
        <div className='flex flex-col justify-end w-auto h-full md:text-justify md:mt-0 mt-96 md:p-9'>
          <div className='flex w-1/4 text-center md:w-full'>
            <h1 className='p-4 text-white estilos-h1'>
              Jamón <br /><span> x </span>
              Jamón
            </h1>
          </div>
          <div className='flex w-auto h-auto text-white'>
            <h2 className='p-5 ml-5 text-lg md:w-full md:text-justify'>
              Venta y distribución de jamón crudo.
              Importados y nacionales
            </h2>
          </div>
        </div>
    </div>
    </>
   
  )
}

export default Main