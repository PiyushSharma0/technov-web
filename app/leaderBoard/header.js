import Image from 'next/image';
import React from 'react';


export default function Header() {
  return (
    <header className="fixed top-0 z-10 w-full px-20 py-1 bg-[rgba(255,255,255,0.8)] shadow-[0_2px_4px_rgba(0,0,0,0.1)] md:px-4 transition">
      <nav className="flex justify-between items-center">
        <a
          href="/"
          className="flex justify-center items-center"
        >
          <Image src="/Technova.png" alt="Logo" height="60" width="60" />
          <span className="mx-1 font-['Orbitron'] text-[30px] font-bold text-lightblack tracking-wide sm:hidden">
            Technova
          </span>
        </a>

        <a
          href="#"
          className="px-4 py-2 flex justify-center items-center bg-primarylight hover:bg-primarydark transition rounded-lg text-center cursor-pointer md:px-2 md:py-1.5"
        >
          {/* <HomeIcon className="mx-0.5 h-5 w-5 text-darkwhite" /> */}
          <Image className="mx-0.5 h-5 w-5 text-darkwhite" src="/power-off-solid.svg" alt="Logo" height="60" width="60" />
          <span className="mx-0.5 font-codefont text-[1.2rem] font-medium text-darkwhite tracking-wide md:text-[1rem]">
            Log Out
          </span>
        </a>
      </nav>
    </header>
  )
}
