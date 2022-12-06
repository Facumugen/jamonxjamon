import FooterLinkContainer from "./FooterLinkContainer";



import React from 'react'

const FooterBottom = () => {
  return (
    <div className='flex flex-col w-auto h-auto pt-5 pb-5 bg-skinColor'>
            <div className='flex flex-row justify-around h-auto'>
                <div className='flex w-auto h-auto'>
                   <img className="w-40" src="logos/logofooter.png" alt="jamonxjamon-logo"/>
                </div>
                <FooterLinkContainer/> 
            </div>

            <div className='flex justify-center w-full pt-16 text-center align-bottom h-1/4'>
                <p className='font-mono text-xs text-pastelColor'>
                    Derechos reservados ©2022 jamonxjamon-arg.com
                </p>
            </div>
    </div>
  )
}

export default FooterBottom