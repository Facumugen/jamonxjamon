import Carrousel from "../molecules/Carrousel";
import Carrousel1 from "../molecules/Carrousel1";
import "../estilos/estilos.css"

const Seccion4 = () => {
  return (
    <div id="marcas"  className="flex flex-col h-full bg-darkSkinColor">
        <div className="flex justify-center">
          <h2 className="p-3 mt-16 capitalize text-skinColor estilos-h2 ">nacionales</h2>
        </div>
          <div className="w-full h-full px-5 mt-16 md:mt-20">
            <Carrousel/>
          </div>
        <div className="flex justify-center">
          <h2 id="marcas" className="p-3 mt-8 capitalize text-skinColor estilos-h2 ">importados</h2>
        </div>
          <div className="w-full h-auto px-5 mt-16 lg:ml-36 md:mt-24 pb-11">
          <Carrousel1/>
          </div>
    </div>
  )
}

export default Seccion4