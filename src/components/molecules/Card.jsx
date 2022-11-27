

const Card = ({value}) => {

  return (
    <div data-bs-toggle="modal" data-bs-target={`#id${value.id}`}>
        <div className="w-auto transition-all duration-200 ease-in-out scale-100 bg-white shadow-xl cursor-pointer md:w-72 rounded-2xl sm:shadow-2xl md:shadow-xl xl:shadow-none hover:shadow-2xl hover:scale-104">
          <div className="flex items-start justify-center w-auto h-auto p-5 overflow-hidden ">
            <img className="object-contain w-32 mt-1 h-36 brightness-120" src= {value.img} alt="zapatos" />
          </div>
  
          <div className="flex-col w-auto p-5 text-center">
            <h2 className="mb-3 text-2xl font-bold capitalize text-secondaryColor">{value.title}</h2>
              <p className="font-sans text-2xl font-light text-darkSecondary">{value.price}</p>
          </div>
          <div className="flex-col w-auto p-5 mt-8 font-sans text-center text-zinc-600">
              <p>
                <span className="text-sm font-bold md:text-base text-fontPrimary">Crudo de {value.instalments} de estacionamiento<br /></span>
                <span className="mt-3 text-base font-bold text-secondaryColor">Efectivo/Transferencia</span>
              </p>
          </div>
        </div>
        
    </div>
  )
}

export default Card;