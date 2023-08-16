"use client";
import { Suspense } from "react";
import SideNav from "./navbar";
import { useRouter } from "next/navigation";
import Header from "./header";
import TopCard from "./topCard";
// import Table from "./table";
import StyledTable from "./table";
// import './styles.css'

export default function Home() {
  const date = new Date(64548451545).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "medium",
  });
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
            <TopCard userData={null} />
            <TopCard userData={null} />
            <TopCard userData={null} />
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
}
