
import React from 'react'


const Navbar = () => {

  return (
    <>
    <nav className="fixed z-10 flex flex-col w-full h-auto bg-navbarColor opacity-95 md:bg-transparent md:sticky-top navbar navbar-expand-lg navbar-light">
      <div className="flex flex-wrap p-1">
        <button className="py-3 pl-5 navbar-toggler sm:z-40" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
          className="w-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#C4A483"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
          </path>
          </svg>
        </button>
        <div className="justify-end flex-grow collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="flex flex-col navbar-nav list-style-none">
            <li className="p-6 nav-item">
              <a className="p-0 text-lg font-light uppercase nav-link hover:text-gray-700 text-pastelColor" href="!#">inicio</a>
            </li>
            <li className="p-6 nav-item">
              <a className="p-0 text-lg font-light uppercase nav-link hover:text-gray-700 text-pastelColor" href="!#">productos</a>
            </li>
          </ul>
        </div>
        <div className="justify-center flex-grow collapse navbar-collapse">
        <img className='w-24 ' src="logos/logo.png" alt="logo-jamónxjamón" />
        </div>
        <div className="justify-start flex-grow collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='flex flex-col pl-0 navbar-nav list-style-none'>
            <li className="p-6 nav-item">
              <a className="p-0 font-serif text-lg font-light uppercase nav-link hover:text-gray-700 text-pastelColor" href="!#">distribuidores</a>
            </li>
            <li className="p-6 nav-item">
              <a className="p-0 text-lg font-light uppercase nav-link hover:text-gray-700 text-pastelColor" href="!#">contacto</a>
            </li>
          </ul>
         {/* <!-- Right elements --> */}

        </div>
      </div>
    </nav>
  </>
  )
}
 
export default Navbar




