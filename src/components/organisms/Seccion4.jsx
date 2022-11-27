import Carrousel from "../molecules/Carrousel";
import "../estilos/estilos.css"

const Seccion4 = () => {
  return (
    <div className="flex flex-col h-full align-middle">
        <div className="flex justify-center">
          <h2 id="marcas" className="p-3 mt-8 capitalize md:mt-3 text-skinColor estilos-h2 ">distibuidores</h2>
        </div>
          <div className="w-full h-full mt-16 px-9 md:mt-24">
            <Carrousel/>
        </div>
    </div>
  )
}

export default Seccion4