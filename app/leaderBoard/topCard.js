import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


import React, { useCallback, useEffect } from "react";

export default function TopCard({ number, id }) {
  //   const [i, setModal] = useRecoilState(modalState);
  //   const [j, setUserData] = useRecoilState(selectedUserState);
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  
  if (number == 1) {
    return (
      <div
        onClick={() => {
          router.push("/profile" + '?' + createQueryString("id",id));
        }}
        className="relative m-auto  p-2 w-full flex justify-center align-center flex-col bg-[#ffffff] shadow-[0_0_4px_rgba(50,69,107,0.2)] rounded-[6px] z-[1] overflow-hidden"
      >
        <div className="m-auto w-full flex justify-center align-center flex-col bg-[#385cf0] rounded-[6px]">
          <h2 className="mt-2.5 mb-0 mx-auto text-4xl font-medium font-codefont text-[#ffffff] text-center tracking-[0.8px]">
            {/* {userData.total_points} */}
            400
          </h2>
          <p className="-mt-[2px] mb-2.5 mx-auto text-lg font-medium font-mainfont text-[#ffffff] text-center tracking-[0.8px]">
            Points
          </p>
          <span className="-mt-[2px] mb-2.5 mx-auto px-5 py-1 text-xl font-medium font-codefont text-[#3c434e] bg-[#ffffff] text-center tracking-[0.2px] rounded-[4px]">
            Rank: 1{/* {userData.rank} */}
          </span>
        </div>

        <div className="flex flex-col items-center mt-4">
          <div className="w-24 h-24 relative rounded-full overflow-hidden shadow lg:w-20 lg:h-20">
            <Image
              //   src={userData.avatar_url}
              src="/NAAC.png"
              //   alt={userData.user_name}
              alt="user_name"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="w-full h-full user_image"
            />
          </div>
          <h1 className="my-2 mx-auto text-2xl font-medium font-codefont text-[#222831] text-center tracking-[0.2px]">
            {/* {parseName(userData.full_name)} */}
            full name
          </h1>
          <Link
            // href={userData.user_url}
            href="#"
            target="_blank"
            rel="noreferrer"
            className="m-auto px-5 py-1 text-lg font-medium font-mainfont text-[#222831] bg-[#99feff] text-center italic tracking-[0.2px] rounded-[8px]"
          >
            userName
          </Link>
          {/* <p className="my-2 mx-auto text-lg font-medium font-mainfont text-[#3c434e] text-center italic tracking-[0.2px] lg:text-base">
          Collage detail
        </p> */}
          {/* <button
          // onClick={() => {
          //   setModal(true);
          //   setUserData(userData);
          // }}
          className="m-auto mb-1.5 px-3 py-1 text-lg font-bold font-curlfont text-sky-600 bg-sky-100 hover:bg-sky-200 text-center rounded-full transition"
        >
          View All PRs
        </button> */}
        </div>
      </div>
    );
  }
  return (
    <div className="relative mx-auto mt-20 p-2 w-full flex justify-center align-center flex-col bg-[#ffffff] shadow-[0_0_4px_rgba(50,69,107,0.2)] rounded-[6px] z-[1] overflow-hidden">
      <div className="m-auto w-full flex justify-center align-center flex-col bg-[#385cf0] rounded-[6px]">
        <h2 className="mt-2.5 mb-0 mx-auto text-4xl font-medium font-codefont text-[#ffffff] text-center tracking-[0.8px]">
          {/* {userData.total_points} */}
          400
        </h2>
        <p className="-mt-[2px] mb-2.5 mx-auto text-lg font-medium font-mainfont text-[#ffffff] text-center tracking-[0.8px]">
          Points
        </p>
        <span className="-mt-[2px] mb-2.5 mx-auto px-5 py-1 text-xl font-medium font-codefont text-[#3c434e] bg-[#ffffff] text-center tracking-[0.2px] rounded-[4px]">
          Rank: {number}
          {/* {userData.rank} */}
        </span>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="w-24 h-24 relative rounded-full overflow-hidden shadow lg:w-20 lg:h-20">
          <Image
            //   src={userData.avatar_url}
            src="/NAAC.png"
            //   alt={userData.user_name}
            alt="user_name"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full user_image"
          />
        </div>
        <h1 className="my-2 mx-auto text-2xl font-medium font-codefont text-[#222831] text-center tracking-[0.2px]">
          {/* {parseName(userData.full_name)} */}
          full name
        </h1>
        <Link
          // href={userData.user_url}
          href="#"
          target="_blank"
          rel="noreferrer"
          className="m-auto px-5 py-1 text-lg font-medium font-mainfont text-[#222831] bg-[#99feff] text-center italic tracking-[0.2px] rounded-[8px]"
        >
          userName
        </Link>
        {/* <p className="my-2 mx-auto text-lg font-medium font-mainfont text-[#3c434e] text-center italic tracking-[0.2px] lg:text-base">
          Collage detail
        </p> */}
        {/* <button
          // onClick={() => {
          //   setModal(true);
          //   setUserData(userData);
          // }}
          className="m-auto mb-1.5 px-3 py-1 text-lg font-bold font-curlfont text-sky-600 bg-sky-100 hover:bg-sky-200 text-center rounded-full transition"
        >
          View All PRs
        </button> */}
      </div>
    </div>
  );
}
