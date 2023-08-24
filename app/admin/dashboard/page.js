import React from "react";
import StyledTable from "./table";
import Navbar from "./navbar";

export default function page() {
  return (
    <div class="w-full px-6 py-6 mx-auto">
      {/* <!-- row 1 --> */}
      <div class="flex flex-wrap px-40 -mx-3">
        {/* <!-- card1 --> */}
        <div class="w-full max-w-full px-10 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border @apply shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]">
            <div class="flex-auto p-4">
              <div class="flex flex-row ">
                <div class="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                      Total Members
                    </p>
                    <h5 class="mb-0 font-bold">
                      499
                      <span class="leading-normal text-sm font-weight-bolder text-lime-500"></span>
                    </h5>
                  </div>
                </div>
                <div class="px-3 text-right basis-1/3">
                  <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl ">
                    <img
                      class="ni leading-none ni-money-coins text-lg relative  text-white"
                      src="https://cdn-icons-png.flaticon.com/512/2995/2995620.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full max-w-full px-10 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border @apply shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]">
            <div class="flex-auto p-4">
              <div class="flex flex-row ">
                <div class="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                      Total Events
                    </p>
                    <h5 class="mb-0 font-bold">
                      499
                      <span class="leading-normal text-sm font-weight-bolder text-lime-500"></span>
                    </h5>
                  </div>
                </div>
                <div class="px-3 text-right basis-1/3">
                  <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl ">
                    <img
                      class="ni leading-none ni-money-coins text-lg relative  text-white"
                      src="https://cdn-icons-png.flaticon.com/512/2995/2995620.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full max-w-full px-10 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border @apply shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]">
            <div class="flex-auto p-4">
              <div class="flex flex-row ">
                <div class="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                      Total points
                    </p>
                    <h5 class="mb-0 font-bold">
                      499
                      <span class="leading-normal text-sm font-weight-bolder text-lime-500"></span>
                    </h5>
                  </div>
                </div>
                <div class="px-3 text-right basis-1/3">
                  <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl ">
                    <img
                      class="ni leading-none ni-money-coins text-lg relative  text-white"
                      src="https://cdn-icons-png.flaticon.com/512/2995/2995620.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full max-w-full px-10 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
          <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border ?@apply shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]">
            <div class="flex-auto p-4">
              <div class="flex flex-row ">
                <div class="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                      Total Clubs
                    </p>
                    <h5 class="mb-0 font-bold">
                      8
                      <span class="leading-normal text-sm font-weight-bolder text-lime-500"></span>
                    </h5>
                  </div>
                </div>
                <div class="px-3 text-right basis-1/3">
                  <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl ">
                    <img
                      class="ni leading-none ni-money-coins text-lg relative  text-white"
                      src="https://cdn-icons-png.flaticon.com/512/2995/2995620.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- card2 --> */}
      <div className="mt-10 px-10 w-full">
      <StyledTable />
      </div>
      
      </div>
    </div>
  );
}
