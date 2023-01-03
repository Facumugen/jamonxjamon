import CardImp from '../molecules/CardImp'
import ImgCardImp from '../molecules/ImgCardImp'
import "../estilos/estilos.css"

export const ProductosImportados = () => {
  return (
    <>
    <div id='productos' className='flex flex-col w-full text-center bg-white h-min-screen'>
        <h2 className='p-3 mt-16 capitalize md:mt-6 text-skinColor estilos-h2'>productos importados</h2>
    <div className='flex flex-wrap justify-center w-auto gap-6 py-12 space-x-1 align-middle h-min-screen'>
      {ImgCardImp.map((item,i) =>
        <CardImp key={i} value={item} index={i} />
        )}
    </div>
    </div>
    </>
  )
}

export default ProductosImportados;