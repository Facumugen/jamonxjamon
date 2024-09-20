
const CardBox = ({value}) => {
  
  return (
      <div>
          <a href="https://api.whatsapp.com/send?phone=5491131887257&text=Hola, quiero consultar sobre la caja..." target="_blank" rel="noopener noreferrer">
          <div className="transition-all duration-200 ease-in-out scale-100 bg-[#FFFFFF] shadow-xl cursor-pointer sm:w-96 h-100 w-80 h-90 rounded-xl sm:shadow-2xl md:shadow-xl xl:shadow-md hover:shadow-2xl hover:scale-105">
            <div className="flex items-start justify-center w-auto h-auto overflow-hidden ">
              <img className="mt-1 brightness-120 rounded-t-xl sm:w-96 h-100 w-80 h-90" src= {value.img} alt="box gourmet" />
            </div>
            <div className="flex-col w-auto p-10 mt-0 font-sans text-center text-zinc-600">
                <p>
                  <span className="mt-0 text-base font-bold text-secondaryColor #A78D6F">Efectivo/Transferencia</span>
                </p>
            </div>
          </div>
          </a>
      </div>
    )
  }

  export default CardBox;