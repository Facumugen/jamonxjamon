import Card from '../molecules/Card'
import ImgCard from '../molecules/ImgCard'


export const CardSeccion = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center w-auto bg-[#957C65] gap-6 py-5 space-x-1 sm:gap-4 h-min-screen md:grid md:grid-cols-3 xl:grid-cols-5'>
      {ImgCard.map((item,i) =>
        <Card key={i} value={item} index={i} />
        )}
    </div>
    </>
  )
}

export default CardSeccion;
