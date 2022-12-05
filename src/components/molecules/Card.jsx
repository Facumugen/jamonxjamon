

const Card = ({value}) => {

  return (
    <div data-bs-toggle="modal" data-bs-target={`#id${value.id}`}>
      <a href="https://api.whatsapp.com/send?phone=5491131887257&text=Hola," target="_blank" rel="noopener noreferrer">
        <div className="w-auto transition-all duration-200 ease-in-out scale-100 bg-white shadow-xl cursor-pointer md:w-72 rounded-2xl sm:shadow-2xl md:shadow-xl xl:shadow-md hover:shadow-2xl hover:scale-104">
          <div className="flex items-start justify-center w-auto h-auto p-5 overflow-hidden ">
            <img className="object-contain h-32 mt-1 w-28 brightness-120" src= {value.img} alt="zapatos" />
          </div>
  
          <div className="flex-col w-auto p-5 text-center">
            <h2 className="mb-3 text-3xl font-bold capitalize text-secondaryColor">{value.title}</h2>
          </div>
          <div className="flex-col w-auto mt-8 font-sans text-center p-7 text-zinc-600">
              <p>
                <span className="text-base font-bold md:text-base text-fontPrimary">{value.instalments} de estacionamiento<br /></span>
                <span className="mt-3 text-base font-bold text-secondaryColor">Efectivo/Transferencia</span>
              </p>
          </div>
        </div>
      </a>  
    </div>
  )
}

export default Card;