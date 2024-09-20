import "../estilos/estilos.css";
import Carrouseljamcrudo from '../molecules/Carrouseljamcrudo';

const JamónCrudo = () => {
  return (
    <div className="flex flex-col h-full text-center bg-darkSkinColor">
        <div className="flex justify-center">
          <h2 id="sin hueso" className="p-3 mt-16 capitalize text-skinColor estilos-h2 ">jamón crudo deshuesado</h2>
        </div>
          <div className="w-auto h-full px-5 mt-16 md:mt-20">
            <Carrouseljamcrudo />
          </div>
    </div>
  )
}

export default JamónCrudo;