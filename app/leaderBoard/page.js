"use client";
import { Suspense, useContext } from "react";
import SideNav from "./navbar";
import { useRouter } from "next/navigation";
import Header from "./header";
import TopCard from "./topCard";
// import Table from "./table";
import StyledTable from "./table";
import UserContext from "@/context/UserContext";
import Loading from "./loading";
// import './styles.css'

export default function Home() {
  const date = new Date(64548451545).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "medium",
  });
  const user = useContext(UserContext);
  // console.log(user);
  const router = useRouter();

  if (user == null) {
    return <Loading />;
  }

  if (user.displayName ? user.displayName != null : user == null) {
    return (
      <main className="flex w-full bg-[azure]">
        <Suspense fallback={<div>Loading...</div>}>
          <SideNav />
        </Suspense>
        <Header />
        <section className="relative w-[95%] mx-auto mt-32 mb-12">
          <div className="px-8 w-full lg:px-0">
            <div className="relative my-10 mx-auto flex justify-center items-center flex-col text-center lg:mx-8 sm:mx-2">
              <h2 className="my-1.5 pt-0 px-2 pb-2 font-['Blanka'] text-[1rem] font-bold text-[#3c434e] tracking-[4px] rounded-lg bg-[rgba(255,255,255,0.8)] shadow-[0_0_4px_rgba(50,69,107,0.2)] md:text-[2rem]">
                Technova 2K23 Leaderboard
              </h2>
              <p className="my-4 font-codefont text-2xl font-medium text-[#3c434e] tracking-wide">
                Check your rank here!
              </p>
              <p className="my-2 font-codefont text-lg font-medium text-[#3c434e] tracking-wide">
                Last updated on:
                <span className="mx-0.5 font-curlfont font-bold text-[#1d4cb0] italic">
                  {date}
                </span>
              </p>
            </div>
            <div className="relative my-10 xl:px-12 flex flex-col justify-center items-center gap-8 lg:px-8 md:px-8 sm:px-2 md:flex-row">
              <TopCard number={2} userData={null} />

              <TopCard number={1} userData={null} />

              <TopCard number={3} userData={null} />
            </div>
            <div className="my-12 xl:mx-12 lg:mx-8 md:mx-8 sm:mx-2">
              <input
                type="search"
                className="h-14 w-full px-3 py-3 font-codefont text-lg text-[#3c434e] font-medium shadow focus:outline-none border-[3px] border-[#787a91] tracking-wider rounded-lg"
                placeholder="Search for your Name or System ID"
                // value={searchText}
                // onChange={handleSearch}
              />
            </div>
            <div className="my-12 xl:mx-12 lg:mx-8 md:mx-8 sm:mx-2">
              <StyledTable
              // data={searchText ? (searchedData as TableDataType[]) : tableData}
              />
            </div>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
          <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-2xl z-10">
            <div className="self-start hidden lg:flex flex-col text-gray-300">
              <h1 className="my-3 font-semibold text-4xl">
                Oops! You are Not Logged In{" "}
              </h1>
              <p className="my-3 font-semibold text-4xl">
                Please Head To Login Page By{" "}
              </p>
              <button
                onClick={() => {
                  router.replace("/login");
                }}
                type="submit"
                className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
              >
                Clicking Here
              </button>
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f0ffff"
            fillOpacity="1"
            d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}
