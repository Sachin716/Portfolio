'use client';
import React from 'react';
import {useRouter , usePathname} from 'next/navigation';

const Navbar = () => {
  const router = useRouter()
  const path = usePathname
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full h-[60px] sm:h-[100px] bg-yellow-600">
    <div className="flex gap-x-10 flex-col sm:flex-row bg-yellow-600 h-[60px] w-full sm:h-[100px] max-w-[1700px]">
      <div className="flex sm:w-[100px] h-full font-bold text-center py-[10px] justify-center items-center sm:mx-8 w-full text-3xl">
        PortFolio
      </div>
      <div className="hidden sm:flex  gap-y-0 my-0 h-0 max-w-[1300px] sm:w-[70vw]">

      </div>
      <div className="flex gap-10 flex-row bg-yellow-600 h-[100px] my-0 justify-center items-center max-w-[700px] sm:min-w-[360px] border-t-w border-black border-solid" >
        <div className="flex hover:bg-gradient-to-r from-purple-500 via-voilet-800 to-indigo-500  bg-clip-text duration-150 hover:text-transparent items-center text-xl max-w-[250px] cursor-pointer font-semibold h-full"  onClick={() => router.push('/about-me')} >
          About Me
        </div>

        <div className="flex hover:bg-gradient-to-r from-purple-500 via-voilet-800 to-indigo-500  bg-clip-text duration-150 hover:text-transparent items-center text-xl max-w-[250px] cursor-pointer font-semibold h-full" onClick={() => router.push('/Projects')} >
          Projects
        </div>

        <div className="flex hover:bg-gradient-to-r from-purple-500 via-voilet-800 to-indigo-500  bg-clip-text duration-150 hover:text-transparent items-center text-xl max-w-[250px] cursor-pointer font-semibold h-full" onClick={() => router.push('/Resume')} >
          Resume
        </div>

        
      </div>
    </div>
    </div>
  
  )
}

export default Navbar;