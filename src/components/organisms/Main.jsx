import React from 'react'
import Navbar from "./Navbar";




const Main = () => {
  return (
    <>
    
    <div style={{backgroundImage: "url(bgbanner/banner1.png)"}} className="flex flex-col h-auto min-w-full min-h-screen mt-0 bg-fixed bg-center bg-no-repeat bg-cover md:justify-between">
        <Navbar/>
        <div className='flex flex-col justify-end w-auto h-full text-justify text-fontPrimary p-14'>
          <div className='flex justify-start w-1/4 h-auto align-middle md:w-1/3'>
            <h1 className='py-16 text-5xl font-extrabold text-center md:py-10'>
              jamón x jamón
            </h1>
          </div>
          <div className='flex justify-center w-1/2 h-auto align-bottom'>
            <h2 className='w-full text-lg text-start md:text-justify'>
              venta y distribución de Jamón Crudo.<br />
              importados y nacionales
            </h2>
          </div>
        </div>
    </div>
    </>
   
  )
}

export default Main