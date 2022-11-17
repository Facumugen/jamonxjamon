
import React from 'react'


const Navbar = (props) => {

  return (
    <>
    <nav className="relative top-0 z-40 flex flex-col items-center justify-between w-full h-auto py-2 text-gray-500 bg-transparent md:sticky navbar navbar-expand-lg navbar-light">
  <div className="flex flex-wrap items-center justify-between w-full px-6 container-fluid">
  <button className="py-2 border-0 navbar-toggler sm:z-40" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
 className="w-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#957C65"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div className="items-center flex-grow collapse navbar-collapse" id="navbarSupportedContent">
  <a className="flex items-center mt-2 mr-1 text-gray-900 hover:text-gray-900 focus:text-gray-900 lg:mt-0" href="!#">
    <img src="./icon.png"  alt=""

      loading="lazy" className='h-9'/>
  </a>
  {/* <!-- Left links --> */}
  <ul className="flex flex-col pl-0 mr-auto navbar-nav list-style-none">
    <li className="p-2 nav-item">
      <a className="p-0 text-lg font-bold text-gray-500 nav-link hover:text-gray-700 focus:text-gray-700 text-fontPrimary" href="!#">Vintage Gentleman</a>
    </li>
    <li className="p-2 nav-item">
      <a className="p-0 text-lg font-bold text-gray-500 nav-link hover:text-gray-700 focus:text-gray-700 text-fontPrimary" href="!#">Guia de talles</a>
    </li>
    <li className="p-2 nav-item">
      <a className="p-0 text-lg font-bold text-gray-500 nav-link hover:text-gray-700 focus:text-gray-700 text-fontPrimary" href="!#">Sucursales</a>
    </li>
    <li className="p-2 nav-item">
      <a className="p-0 text-lg font-bold text-gray-500 nav-link hover:text-gray-700 focus:text-gray-700 text-fontPrimary" href="!#">Nosotros</a>
    </li>
    <li className="p-2 nav-item">
      <a className="p-0 text-lg font-bold text-gray-500 nav-link hover:text-gray-700 focus:text-gray-700 text-fontPrimary" href="!#">Contacto</a>
    </li>
  </ul>
  {/* <!-- Left links --> */}
  </div>
  {/* <!-- Collapsible wrapper --> */}

  {/* <!-- Right elements --> */}
  <div className="relative flex items-center">

 
  <div className="relative ml-3 dropdown">
    <a className="flex items-center dropdown-toggle hidden-arrow" href="!#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
    </a>
  
  </div>
  </div>
  {/* <!-- Right elements --> */}
  </div>

</nav>
    </>
  )
}
 
export default Navbar




