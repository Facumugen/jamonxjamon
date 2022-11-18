import Card from '../molecules/Card'
import ImgCard from '../molecules/ImgCard'


export const CardSeccion = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center w-auto gap-6 space-x-1 bg-white py-28 sm:gap-4 h-min-screen md:grid md:grid-cols-3 xl:grid-cols-4'>
      {ImgCard.map((item,i) =>
        <Card key={i} value={item} index={i} />
        )}
    </div>
    </>
  )
}

export default CardSeccion;
