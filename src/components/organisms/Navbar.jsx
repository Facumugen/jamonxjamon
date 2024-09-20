import React from 'react'
import "../estilos/estilos.css"

window.onhashchange = function () {
  window.history.replaceState({}, document.title, window.location.href.split('#')[0]);
}

const Navbar = () => {

  return (
    <>
    <nav className="fixed z-10 flex flex-col w-full h-auto md:bg-transparent bg-darkSecondary md:sticky-top navbar navbar-expand-lg navbar-light">
      <div className="flex flex-wrap justify-between px-3 container-fluid">
      <button className="py-2 pl-1 border-0 md:py-3 navbar-toggler sm:z-40" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
         className="w-5 md:w-8 md:ml-3 md:mt-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="#BF875A"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
          </path>
        </svg>
        </button>
        <div className="flex navbar-nav nav-item md:hidden">
          <img className='w-16 py-2 pr-2 md:w-24 ' src="logos/logo.png" alt="jamonxjamon-logo" />
        </div>
        <div className="flex-grow p-5 md:flex-grow collapse navbar-collapse lg:p-0 justify-evenly" id='navbarSupportedContent'>
          {/* <!-- Left links --> */}
            <div className='flex'>
              <a id="remove" className="p-0 mt-10 text-2xl text-white uppercase transition duration-500 ease-in-out estilos-nav hover:scale-110" href="#productos">jamón crudo</a>
            </div>
            <div className='flex'>
              <a id="remove" className="p-0 mt-10 text-2xl text-white uppercase transition duration-500 ease-in-out estilos-nav hover:scale-110" href="#parma">tipo parma</a>
            </div>
            <div className="justify-center collapse navbar-collapse">
              <img className='pt-2 w-32 h-32' src="logos/logo.png" alt="jamonxjamon-logo" />
            </div>
            <div className='flex'>
              <a id="remove" className="p-0 mt-10 text-2xl text-white uppercase transition duration-500 ease-in-out estilos-nav hover:scale-110" href="#sin hueso">j.c deshuesado</a>
            </div>
            <div className='flex'>
              <a id="remove" className="p-0 mt-10 text-2xl text-white uppercase transition duration-500 ease-in-out estilos-nav hover:scale-110" href="#box">box gourmet</a>
            </div>
        </div>
        </div>
    </nav>
  </>
  )
}
 
export default Navbar




