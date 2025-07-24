import { Logo } from '../images/image';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import NavItems from './components/NavItems';

type HeaderProps = {
   color?: string
}

const Header: React.FC<HeaderProps> = ({ color = '#333136' }) => {

   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [height, setHeight] = useState<number>(0);

   const divRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (divRef.current) {
         const height = divRef.current.getBoundingClientRect().height;
         setHeight(height);
      }
   }, []);

   return (
      <div ref={divRef} className='w-full flex sm:static sm:flex-row sm:py-0 sm:bg-transparent flex-col fixed top-0 z-40 py-10 bg-white'>
         <div className='w-full sm:mb-16 flex justify-between items-center sm:px-0 px-5 '>
            <div className='sm:w-auto w-full sm:block flex justify-between items-center'>
               <Logo color={color} />
               <button data-collapse-toggle="navbar-default" type="button" aria-controls="mobile-menu" aria-expanded="false"
                  className="relative sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  <svg className={`${!isOpen ? 'block' : 'hidden'}`} width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g id="Group">
                        <rect id="Rectangle" width="24" height="4" fill="#1D1C1E" />
                        <rect id="Rectangle Copy" y="8" width="24" height="4" fill="#1D1C1E" />
                        <rect id="Rectangle Copy 2" y="16" width="24" height="4" fill="#1D1C1E" />
                     </g>
                  </svg>
                  <svg className={`${isOpen ? 'block' : 'hidden'}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g id="Group">
                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 7.17165L2.92901 0.100586L0.100586 2.92901L7.17165 10.0001L0.100586 17.0711L2.92901 19.8996L10.0001 12.8285L17.0711 19.8996L19.8996 17.0711L12.8285 10.0001L19.8996 2.92901L17.0711 0.100586L10.0001 7.17165Z" fill="#1D1C1E" />
                     </g>
                  </svg>
               </button>
            </div>
            <div className="sm:flex hidden">
               <NavItems color={color} className='sm:text-sm sm:gap-x-8' />
            </div>
         </div>
         {isOpen && (
            <div
               className={`fixed z-40 w-full h-full bg-gray-700 opacity-60`}
               style={{ top: `${height}px` }}
               onClick={() => setIsOpen(false)}
            ></div>
         )}
         <div
            className={`fixed left-0 h-[235px] w-full flex items-center pl-5 bg-black z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
               }`}
            style={{ top: `${height}px` }}
         >
            <NavItems color='#FFFFFF' className='text-2xl/[25px] gap-8' />
         </div>
      </div>
   )
}

export default Header;