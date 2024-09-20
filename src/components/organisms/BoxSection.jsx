import ImgCardBox from '../molecules/ImgCardBox'
import CardBox from '../molecules/CardBox'
import "../estilos/estilos.css"

export const BoxSection = () => {
  return (
    <>
    <div className='flex flex-col w-full text-center bg-white h-min-screen'>
        <h2 id='box' className='p-3 mt-16 capitalize md:mt-6 text-skinColor estilos-h2'>Box Gourmet</h2>
          <div className='flex flex-wrap justify-center w-auto gap-6 py-12 space-x-1 align-middle h-min-screen'>
            {ImgCardBox.map((item,i) =>
            <CardBox key={i} value={item} index={i} />
            )}
          </div>
    </div>
    </>
  )
}

export default BoxSection;