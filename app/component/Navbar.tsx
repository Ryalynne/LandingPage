import React from 'react';
import Link from "next/link";
const Navbar = () => {
  return (
    <div className='w-full relative z-50'>
       <nav className="
       bg-transparent 
                    fixed 
                    top-0 ">
      <div className="max-w-screen-xl 
                      flex 
                      justify-between 
                      items-center 
                      mx-auto 
                      p-4">
        <Link href="/" className="flex 
                               items-center 
                               space-x-3 
                               px-10 
                               rtl:space-x-reverse ">
          <img src="/images/logo.png" className="h-8 " alt="Primate Logo" />
          <span className="self-center 
                           text-2xl 
                           font-semibold 
                           whitespace-nowrap 
                           dark:text-white">
            PRIMATES
          </span>
        </Link>

        <div className="hidden md:block md:w-auto" id="navbar-default ">
          <ul className="font-medium 
                         flex 
                         flex-col 
                         md:flex-row 
                         space-y-4 
                         md:space-y-0 
                         md:space-x-8
                         rtl:space-x-reverse">

            <li >
              <Link
                href="/work"
                className="block 
                           py-2 
                           px-3 
                           text-white 
                           rounded 
                           hover:bg-transparent 
                           hover:text-blue-700
                           dark:text-white 
                           dark:hover:text-blue-500"
                aria-current="page"
              >
                Work
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="block
                           py-2 
                           px-3
                           text-gray-900 
                           rounded 
                           hover:text-blue-700 
                           dark:text-white 
                           dark:hover:text-blue-500"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="block 
                           py-2 
                           px-3 
                           text-gray-900 
                           rounded 
                           hover:text-blue-700 
                           dark:text-white
                           dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block 
                           py-2 
                           px-3 
                           text-gray-900 
                           rounded 
                           hover:text-blue-700 
                           dark:text-white 
                           dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
