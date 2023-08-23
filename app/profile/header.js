import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <header className="fixed top-0 z-10 w-full px-5 md:px-14 lg:px-16 xl:px-20 py-1 bg-[rgba(255,255,255,0.8)] shadow-[0_2px_4px_rgba(0,0,0,0.1)]  transition">
      <nav className="flex justify-between items-center">
        <a href="/" className="flex justify-center items-center">
          <Image src="/Technova.png" alt="Logo" height="60" width="60" />
          <span className="mx-2 font-['Orbitron'] text-[30px] font-bold text-[#3c434e] tracking-wide hidden md:block">
            Technova
          </span>
        </a>

        <button
          onClick={() => {
            signOut(auth)
              .then(() => {
                router.push("/");
                // router.refresh();
                // Sign-out successful.
              })
              .catch((error) => {
                // An error happened.
                alert(error.message);
              });
          }}
          className="px-4 py-2 flex justify-center items-center bg-[#385cf0] hover:bg-[#1d4cb0] transition rounded-lg text-center cursor-pointer md:px-2 md:py-1.5"
        >
          {/* <HomeIcon className="mx-0.5 h-5 w-5 text-[#ffffff]" /> */}
          <Image
            className="mx-0.5 h-5 w-5 text-[#ffffff]"
            src="/power-off-solid.svg"
            alt="Logo"
            height="60"
            width="60"
          />
          <span className="mx-0.5 font-codefont text-[1.2rem] font-medium text-[#ffffff] tracking-wide md:text-[1rem]">
            Log Out
          </span>
        </button>
      </nav>
    </header>
  );
}
