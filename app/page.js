'use client';
import Image from "next/image";
import ThemeChanger from "./ThemeSwitch";
import Navbar from "./navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/dashboard')
  }, [router])
  return (
    <main className="flex w-full justify-center">
      {/* <Image
              src="/Technova.png"
              alt="N"
              width="32"
              height="32"
              className="w-12"
            /> */}
      <Navbar />
      {/* <Link href="/leaderBoard">go to </Link> */}
    </main>
  );
}
