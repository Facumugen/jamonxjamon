import CardParmaImp from '../molecules/CardParmaImp'
import ImgCardParmaImp from '../molecules/ImgCardParmaImp'
import "../estilos/estilos.css"

export const ProductosParmaImportados = () => {
  return (
    <>
    <div className='flex flex-col w-full text-center bg-white h-min-screen'>
        <h2 className='p-3 mt-16 capitalize md:mt-6 text-skinColor estilos-h2'>jamones parma importados</h2>
    <div className='flex flex-wrap justify-center w-auto gap-6 py-12 space-x-1 align-middle h-min-screen'>
      {ImgCardParmaImp.map((item,i) =>
        <CardParmaImp key={i} value={item} index={i} />
        )}
    </div>
    </div>
    </>
  )
}

export default ProductosParmaImportados;