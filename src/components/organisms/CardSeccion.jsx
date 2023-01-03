import Card from '../molecules/Card'
import ImgCard from '../molecules/ImgCard'
import "../estilos/estilos.css"

export const Productos = () => {
  return (
    <>
    <div className='flex flex-col w-full text-center bg-white h-min-screen'>
        <h2 className='p-3 mt-16 capitalize md:mt-6 text-skinColor estilos-h2'>productos nacionales</h2>
    <div className='flex flex-wrap justify-center w-auto gap-6 py-12 space-x-1 align-middle h-min-screen'>
      {ImgCard.map((item,i) =>
        <Card key={i} value={item} index={i} />
        )}
    </div>
    </div>
    </>
  )
}

export default Productos;
