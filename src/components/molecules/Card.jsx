import Modal from './Modal'

const Card = ({value}) => {

  return (
    <div data-bs-toggle="modal" data-bs-target={`#id${value.id}`}>
        <div className="transition-all duration-200 ease-in-out cursor-pointer w-auto rounded-2xl shadow-2xl scale-100 sm:shadow-2xl md:shadow-xl xl:shadow-none hover:shadow-2xl hover:scale-104 bg-[#957C65]">
          <div className="flex items-start justify-center w-auto h-auto p-5 overflow-hidden ">
            <img className="object-contain h-auto mt-1 rounded-full w-44 md:w-40 brightness-120" src= {value.img} alt="zapatos" />
          </div>
  
          <div className="flex-col w-auto p-5 text-center">
            <h2 className="mb-3 font-extralight text-2xl capitalize text-[#fefce8]">{value.title}</h2>
              <p className="font-sans text-2xl font-light text-[#fefce8]">{value.price}</p>
          </div>
          <div className="flex-col w-auto p-5 mt-3 font-sans text-center text-zinc-600">
              <p>
                <span className="text-base md:text-sm capitalize font-extralight text-[#fefce8]">3 cuotas sin interés de {value.instalments}<br /></span>
                <span className="text-xs font-bold text-[#fefce8]">Efectivo/Transferencia (5% OFF)</span>
              </p>
          </div>
        </div>
        <Modal id={`id${value.id}`} name={value.title} image={value.img} cost={value.price} />
    </div>
  )
}

export default Card;