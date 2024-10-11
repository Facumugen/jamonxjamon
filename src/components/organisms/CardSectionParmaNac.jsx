import CardParmaNac from '../molecules/CardParmaNac'
import ImgCardParmaNac from '../molecules/ImgCardParmaNac'
import "../estilos/estilos.css"

export const ProductosParmaNacionales = () => {
  return (
    <>
    <div className='flex flex-col w-full text-center bg-white h-min-screen'>
        <h2 id='productos' className='p-3 mt-16 capitalize md:mt-6 text-skinColor estilos-h2'>tipo parma nacionales</h2>
    <div className='flex flex-wrap justify-center w-auto gap-y-6 gap-x-16 py-12 space-x-1 align-middle h-min-screen'>
      {ImgCardParmaNac.map((item,i) =>
        <CardParmaNac key={i} value={item} index={i} />
        )}
    </div>
    </div>
    </>
  )
}

export default ProductosParmaNacionales;