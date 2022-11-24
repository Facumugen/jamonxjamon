import Modal from './Modal'

const Card = ({value}) => {

  return (
    <div data-bs-toggle="modal" data-bs-target={`#id${value.id}`}>
        <div className="w-auto transition-all duration-200 ease-in-out scale-100 bg-white shadow-xl cursor-pointer rounded-2xl sm:shadow-2xl md:shadow-xl xl:shadow-none hover:shadow-2xl hover:scale-104">
          <div className="flex items-start justify-center w-auto h-auto p-5 overflow-hidden ">
            <img className="object-contain w-32 mt-1 h-36 md:w-20 brightness-120" src= {value.img} alt="zapatos" />
          </div>
  
          <div className="flex-col w-auto p-5 text-center">
            <h2 className="mb-3 text-2xl capitalize font-extralight text-fontPrimary">{value.title}</h2>
              <p className="font-sans text-2xl font-light text-fontPrimary">{value.price}</p>
          </div>
          <div className="flex-col w-auto p-5 mt-8 font-sans text-center text-zinc-600">
              <p>
                <span className="text-base capitalize md:text-sm font-extralight text-fontPrimary">3 cuotas sin interés de {value.instalments}<br /></span>
                <span className="text-xs font-bold text-fontPrimary">Efectivo/Transferencia (5% OFF)</span>
              </p>
          </div>
        </div>
        <Modal id={`id${value.id}`} name={value.title} image={value.img} cost={value.price} />
    </div>
  )
}

export default Card;