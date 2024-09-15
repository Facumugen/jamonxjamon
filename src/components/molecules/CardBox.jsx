
const CardBox = ({value}) => {
  
  return (
      <div>
          <div className="w-auto transition-all duration-200 ease-in-out scale-100 bg-[#FFFFFF] shadow-xl cursor-pointer md:w-72 rounded-xl sm:shadow-2xl md:shadow-xl xl:shadow-md hover:shadow-2xl hover:scale-105">
            <div className="flex items-start justify-center w-auto h-auto overflow-hidden ">
              <img className="mt-1 brightness-120 rounded-t-xl w-72 h-72 sm:w-80 h-72" src= {value.img} alt="box gourmet" />
            </div>
            <div className="flex-col w-auto p-10 mt-0 font-sans text-center text-zinc-600">
                <p>
                  <span className="mt-0 text-base font-bold text-secondaryColor #A78D6F">Efectivo/Transferencia</span>
                </p>
            </div>
          </div>
      </div>
    )
  }

  export default CardBox;