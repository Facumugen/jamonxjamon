import Card from '../molecules/Card'
import ImgCard from '../molecules/ImgCard'
import "../estilos/estilos.css"

export const CardSeccion = () => {
  return (
    <>
    <div className='flex flex-col w-full text-center bg-white h-min-screen'>
        <h2 id='productos' className='p-3 mt-8 capitalize md:mt-3 text-skinColor estilos-h2'>productos</h2>
    <div className='flex flex-wrap justify-center w-auto gap-6 py-12 space-x-1 align-middle h-min-screen'>
      {ImgCard.map((item,i) =>
        <Card key={i} value={item} index={i} />
        )}
    </div>
    </div>
    </>
  )
}

export default CardSeccion;
