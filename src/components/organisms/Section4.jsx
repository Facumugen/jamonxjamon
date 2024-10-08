import CarrouselNac from "../molecules/CarrouselNac";
import CarrouselImp from "../molecules/CarrouselImp";
import "../estilos/estilos.css"

const Marcas = () => {
  return (
    <div className="flex flex-col h-full bg-darkSkinColor">
        <div className="flex justify-center">
          <h2 id="marcas" className="p-3 mt-16 capitalize text-skinColor estilos-h2 ">importados</h2>
        </div>
          <div className="w-auto h-full px-5 mt-16 md:mt-20">
            <CarrouselImp/>
          </div>
        <div className="flex justify-center">
          <h2 className="p-3 mt-8 capitalize text-skinColor estilos-h2 ">nacionales</h2>
        </div>
          <div className="w-auto h-auto px-5 mt-16 md:px-0 lg:ml-8 md:mt-24 pb-11">
          <CarrouselNac/>
          </div>
    </div>
  )
}

export default Marcas;