import CarrouselNac from "../molecules/CarrouselNac";
import CarrouselImp from "../molecules/CarrouselImp";
import "../estilos/estilos.css"

const Seccion4 = () => {
  return (
    <div id="marcas"  className="flex flex-col h-full bg-darkSkinColor">
        <div className="flex justify-center">
          <h2 className="p-3 mt-16 capitalize text-skinColor estilos-h2 ">nacionales</h2>
        </div>
          <div className="w-auto h-full px-5 mt-16 md:mt-20">
            <CarrouselNac/>
          </div>
        <div className="flex justify-center">
          <h2 id="marcas" className="p-3 mt-8 capitalize text-skinColor estilos-h2 ">importados</h2>
        </div>
          <div className="w-auto h-auto px-5 mt-16 md:px-0 lg:ml-8 md:mt-24 pb-11">
          <CarrouselImp/>
          </div>
    </div>
  )
}

export default Seccion4