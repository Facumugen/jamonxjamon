
import React from 'react'


const Navbar = () => {

  return (
    <>
    <nav className="fixed z-10 flex flex-col w-full h-auto md:bg-transparent bg-darkSecondary opacity-90 md:sticky-top navbar navbar-expand-lg navbar-light">
      <div className="flex flex-wrap justify-between px-2">
        <button className="flex px-3 py-6 navbar-toggler sm:z-40" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
          className="w-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#BF875A"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
          </path>
          </svg>
        </button>
        <div className="flex navbar-nav nav-item md:hidden">
          <img className='w-20 py-2 pr-2 ' src="logos/logo.png" alt="logo-jamónxjamón" />
        </div>
        <div className="flex-grow p-5 lg:p-0 md:justify-evenly collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Left links --> */}
            <div className="flex mt-8 navbar-nav nav-item">
              <a className="font-serif text-lg text-white uppercase transition duration-500 ease-in-out nav-link hover:text-skinColor hover:scale-100" href="!#">inicio</a>
            </div>
            <div className="flex mt-8 navbar-nav nav-item">
              <a className="p-0 font-serif text-lg text-white uppercase transition duration-500 ease-in-out nav-link hover:text-skinColor hover:scale-100" href="!#">productos</a>
            </div>
            <div className="justify-center navbar-nav nav-item collapse navbar-collapse">
              <img className='w-24 pt-2' src="logos/logo.png" alt="logo-jamónxjamón" />
            </div>
            <div className='flex mt-8 navbar-nav nav-item'>
              <a className="p-0 font-serif text-lg font-light text-white uppercase transition duration-500 ease-in-out nav-link hover:text-skinColor hover:scale-100" href="!#">distribuidores</a>
            </div>
            <div className="flex mt-8 navbar-nav nav-item">
              <a className="p-0 font-serif text-lg text-white uppercase transition duration-500 ease-in-out nav-link hover:text-skinColor hover:scale-100" href="!#">contacto</a>
            </div>
        </div>
        </div>
         {/* <!-- Right elements --> */}
    </nav>
  </>
  )
}
 
export default Navbar




