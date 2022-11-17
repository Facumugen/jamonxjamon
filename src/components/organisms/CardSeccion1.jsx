import Card from '../molecules/Card.jsx'
//import ProductsShopping from '../JsonServer/Products.jsx'
// import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils/index.js'


export const CardSeccion = (props) => {

 const Product1=props.products

  return (
    <>
      <div id='seccion1' className='bg-[#957C65] h-min-screen w-full items-center justify-center flex flex-col flex-wrap pb-10'>
        <h2 className='text-2xl font-bold text-center capitalize my-14 sm:text-3xl sm:ml-5 sm:mt-9 md:text-5xl lg:text-6xl 2xl:text-6xl 2xl:ml-9 text-fontSecondary'>últimas ofertas</h2>
          <div className='flex flex-wrap justify-center w-auto gap-6 my-4 space-x-1 sm:gap-4 h-min-screen md:grid md:grid-cols-3 xl:grid-cols-5'>
            {Product1.map((item,i) =>
              <Card key={i} modalValue={i} value={item} index={i} />
              )}
          </div>
      </div>
    </>
  )
}

export default CardSeccion;
