

//const Modal = ({id, name, image, cost, addToCart}) => {
const Modal = (props) => {

  
   const product= props.value,
         modalID= props.modalid
  
  const addToCart= props.addToCart

  // const ID= props.id,
  //       modalID= props.modalid,
  //       name= props.name,
  //       image = props.image,
  //       cost=props.cost;
  
  //       const addToCart= props.addToCart

  return (
    <div className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none pointer-events-none modal fade"
          id={modalID} tabIndex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
      <div className="relative w-auto pointer-events-none modal-dialog modal-dialog-centered modal-lg">
        <div className="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none modal-content opacity-95 bg-clip-padding pb-9">
          <div className="flex items-center justify-between flex-shrink-0 p-4 pointer-events-auto modal-header rounded-t-md">
            <button type="button" className="box-content w-4 h-4 p-1 border-none rounded-none opacity-50 pointer-events-auto btn-close text-fontSecondary focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close">  
            </button>
          </div>

          <div className="relative flex flex-row h-3/4">
            <div className="relative flex justify-center w-5/6">
              <img className="object-contain w-auto h-auto md:w-3/4 brightness-120" src= {`${product.img}` }alt="zapatos" />
            </div>
      
            <div className="flex flex-col w-2/4">
              <div className="flex justify-center h-1/4">
                <h1 className="text-xl capitalize pointer-events-auto font-extralight lg:text-2xl text-fontSecondary">
                {product.title}
                
                </h1>
              </div>
              <div className="flex justify-center h-1/4">
                <h2 className="font-sans text-2xl font-light text-fontSecondary">
                  ${product.price}
                </h2>
              </div>
              <div className="flex flex-col justify-center w-auto mx-auto text-sm list-none text-fontSecondary">
                  <li>Frente con cordones</li>
                  <li>Suela de goma</li>
                  <li>Forrado en gamuza</li>
                  <li>Plantilla acolchada</li>
                  <li>Pulido a mano</li>
              </div>
              <div className="flex justify-center w-auto mt-5 pointer-events-auto">
                {/* CAMBIE EL ADDTOCART(ID) por ADDTOCART(PRODUCT) */}
              <button className="bg-[#957C65] rounded-xl p-2 text-fontSecondary " onClick={()=>addToCart(product)}> COMPRAR </button>

              </div>

            </div>
          </div> 

        
          
        </div>
      </div>
    </div>
  )
}

export default Modal;
