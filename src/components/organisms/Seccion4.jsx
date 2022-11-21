



import img1 from '../../graphics/imagenes/Varios/img2Seccion4.jpg'
import banner1 from '../../graphics/imagenes/Varios/img1Seccion4.jpg'
import img3 from '../../graphics/imagenes/Varios/img3Seccion4.jpg'





const Seccion4 = () => {
  return (
    <div className='flex flex-col items-center w-full h-auto gap-3 p-8 bg-white md:flex-row md:justify-center'>
    
            <div className='flex-auto w-64 p-2 mt-2'>
                <h3 className='font-bold text-fontSecondary sm:text-lg sm:ml-5 sm:mt-9 md:text-lg lg:text-lg 2xl:text-lg '>Titulo 1</h3>
                <div className='mb-2'> Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque harum pariatur
                 sunt quisquam, sequi esse excepturi eius maiores nesciunt corrupti voluptas! Tempora
                  obcaecati tenetur soluta dolorum neque, optio voluptas.</div>
                  <img src={img1} alt="" className='border-2 rounded-md shadow-md h-25' />
                
            </div>
            <div className='flex-auto p-5 mt-5 w-72'>
                <img src={banner1} alt="" className='border-2 rounded-md' />
                <h3 className='font-bold text-fontSecondary sm:text-lg sm:ml-5 sm:mt-9 md:text-lg lg:text-lg 2xl:text-lg'>Titulo 2</h3>
                <div className=''> Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque harum pariatur
                 sunt quisquam, sequi esse excepturi eius maiores nesciunt corrupti voluptas! Tempora
                  obcaecati tenetur soluta dolorum neque, optio voluptas.</div>
            </div>
            <div className='flex-auto w-64 p-2 mt-5 '>
                <h3 className='font-bold text-fontSecondary sm:text-lg sm:ml-5 sm:mt-9 md:text-lg lg:text-lg 2xl:text-lg'>Titulo 3</h3>
                  <div className='mb-2'> Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque harum pariatur
                 sunt quisquam, sequi esse excepturi eius maiores nesciunt corrupti voluptas! Tempora
                  obcaecati tenetur soluta dolorum neque, optio voluptas.</div>
                  <img src={img3} alt="" className='mb-2 border-2 rounded-md'/>
            </div>
    </div>
  )
}

export default Seccion4