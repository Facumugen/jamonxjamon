import FooterLinkContainer from "./FooterLinkContainer";


import React from 'react'

const FooterBottom = () => {
  return (
    <div className='w-full h-full p-5 bg-skinColor'>
            <div className='flex justify-between py-10 h-1/2'>
                <div className='flex justify-center w-2/4 h-auto'>
                    <p className='font-mono text-xs text-pastelColor'>
                        Teléfonos: <br />
                        0303 - 456 <br />
                        011 - 111222 <br /> <br />
                    </p>
                </div>
                <div className='flex justify-center h-auto md:w-1/2'>
                   <FooterLinkContainer/> 
                </div>
            </div>

            <div className='flex flex-col w-full text-center align-bottom h-1/4'>
                <p className='font-mono text-xs text-pastelColor'>
                    Email: vintageGentlemen@gmail.com
                </p>
                <p className='font-mono text-xs text-pastelColor'>
                    Powered By: La estación de Poder
                </p>
            </div>

    </div>
  )
}

export default FooterBottom