
const CardImp = ({value}) => {

    return (
      <div>
        <a href="https://api.whatsapp.com/send?phone=5491131887257&text=Hola," target="_blank" rel="noopener noreferrer">
          <div className="w-auto transition-all duration-200 ease-in-out scale-100 bg-white shadow-xl cursor-pointer md:w-72 rounded-2xl sm:shadow-2xl md:shadow-xl xl:shadow-md hover:shadow-2xl hover:scale-104">
            <div className="flex items-start justify-center w-auto h-auto p-5 overflow-hidden ">
              <img className="object-contain w-32 h-32 mt-1 brightness-120" src= {value.img} alt="jamon crudo" />
            </div>
    
            <div className="flex-col w-auto p-5 text-center">
              <h2 className="mb-0 text-2xl font-bold capitalize md:mb-3 text-secondaryColor card_title notranslate">{value.title}</h2>
            </div>
            <div className="flex-col w-auto mt-8 font-sans text-center p-7 text-zinc-600">
                <p>
                  <span className="text-lg font-bold md:text-xl text-fontPrimary">Jamón Crudo<br /></span>
                  <span className="px-5 mt-3 text-sm font-bold text-secondaryColor">Efectivo/Transferencia</span>
                </p>
            </div>
          </div>
          </a>  
      </div>
    )
  }

  export default CardImp;