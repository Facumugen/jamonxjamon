const CardBox = ({value}) => {

    return (
      <div>
        <a href="https://api.whatsapp.com/send?phone=5491131887257&text=Hola," target="_blank" rel="noopener noreferrer">
          <div className="w-auto transition-all duration-200 ease-in-out scale-100 bg-white shadow-xl cursor-pointer md:w-72 rounded-2xl sm:shadow-2xl md:shadow-xl xl:shadow-md hover:shadow-2xl hover:scale-104">
            <div className="flex items-start justify-center w-auto h-auto p-5 overflow-hidden ">
              <img className="mt-1 brightness-120 w-72 h-72  sm:w-80 h-72" src= {value.img} alt="jamon crudo tipo parma" />
            </div>
            <div className="flex-col w-auto p-12 mt-0 font-sans text-center text-zinc-600">
                <p>
                  <span className="mt-0 text-base font-bold text-secondaryColor">Efectivo/Transferencia</span>
                </p>
            </div>
          </div>
        </a>  
      </div>
    )
  }
  
  export default CardBox;