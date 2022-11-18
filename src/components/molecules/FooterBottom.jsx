import FooterLinkContainer from "./FooterLinkContainer";


import React from 'react'

const FooterBottom = () => {
  return (
    <div className='bg-skinColor'>
        <div className='h-3/4'>
            <div className='flex h-3/4 justify-evenly'>
                <div className='w-1/2 h-auto md:h-48'>
                    <p className='font-mono text-sm text-center text-pastelColor'>
                        Teléfonos: <br />
                        0303 - 456 <br />
                        011 - 111222 <br /> <br />
                    </p>
                </div>
                <div className='w-1/2 h-auto'>
                   <FooterLinkContainer/> 
                </div>
            </div>

            <div className='flex flex-col text-center align-bottom h-1/4'>
                <p className='font-mono text-sm text-pastelColor'>
                    Email: vintageGentlemen@gmail.com
                </p>
                <p className='font-mono text-xs text-pastelColor'>
                    Powered By: La estación de Poder
                </p>
            </div>
        </div>


    </div>
  )
}

export default FooterBottom