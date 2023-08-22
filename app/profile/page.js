"use client";
import UserContext from "@/context/UserContext";
import SideNav from "./navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useContext } from "react";
import { useState } from "react";
import { auth } from "@/firebase";
import axios from "axios";

export default function Home() {
  const [isEditable, setIsEditable] = useState(false);
  const [isVarified, setIsVarified] = useState(true);
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg"
  );
  // console.log(image);
  const user = useContext(UserContext);
  // console.log(user.displayName);

  const router = useRouter();

  var id;
  if (router.query) {
    id = router.query;
  } else if (user) {
    id = user.displayName;
  } else {
    id = 0;
  }

  const fetchData = async () => {
    // console.log(data);
    try {
      const response = await axios.post("/api/fetchData/profile", {
        query: JSON.stringify({ ID: id }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("");
  const [systemId, setSystemId] = useState("1234567890");
  const [clubs, setClubs] = useState([]);
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [coadingProfiles, setCoadingProfiles] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result); // Set the image data URL
      };

      reader.readAsDataURL(selectedFile); // Read the file as a data URL
    }
  };

  const addData = async () => {
    // console.log(data);
    try {
      const response = await axios.post("/api/addData/users", {
        query: JSON.stringify(data),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="flex w-full bg-[azure]">
        <Suspense fallback={<div>Loading...</div>}>
          <SideNav />
        </Suspense>
      </main>

      <div className="h-full bg-gray-200 p-8">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
              alt="Background"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            {/* <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
              alt="Profile"
            /> */}
            {/* jjh */}
            <div className="profile-pic">
              <label className="-label" for="file">
                <span className="glyphicon glyphicon-camera"></span>
                <span>Change Image</span>
              </label>
              <input id="file" type="file" onChange={handleImageChange} />
              <img
                src={image}
                id="output"
                width="200"
                className="h-40 w-40 border-4 border-white rounded-full"
              />
            </div>
            {/* //hjh */}
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">Amanda Ross</p>
              <span
                className={`${
                  isVarified ? "bg-blue-500" : "bg-red-500"
                } rounded-full p-1`}
                title={`${isVarified ? "Verified" : "Not Verified"}`}
              >
                {isVarified ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-100 h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="10px"
                    height="10px"
                    viewBox="0 0 122.879 122.879"
                    enable-background="new 0 0 122.879 122.879"
                    stroke="currentColor"
                    fill="none"
                    // xml:space="preserve"
                  >
                    <g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="#fff"
                        d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                      />
                    </g>
                  </svg>
                )}
              </span>
            </div>
            <p className="text-gray-700">
              Senior Software Engineer at Tailwind CSS
            </p>
            <p className="text-sm text-gray-500">New York, USA</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              {/* <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
                <span>Connect</span>
              </button> */}
              {!isEditable ? (
                <button
                  onClick={() => {
                    setIsEditable(true);
                  }}
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="96px"
                    height="96px"
                    // stroke="white"
                    fill="white"
                  >
                    <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z" />
                  </svg>
                  <span>Edit</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsEditable(false);
                  }}
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                >
                  <span>Save</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {!isEditable ? (
          <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 w-full">
            <div className="w-full flex flex-col ">
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">
                  Personal Info
                </h4>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="text-gray-700">Amanda S. Ross</span>
                  </li>
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="text-gray-700">24 Jul, 1991</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">System I'd:</span>
                    <span className="text-gray-700">
                      10 Jan 2022 (25 days ago)
                    </span>
                  </li>
                  {/* <li className="flex border-b py-2">
                    <span className="font-bold w-24">Linkedin:</span>
                    <span className="text-gray-700">(123) 123-1234</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Github:</span>
                    <span className="text-gray-700">
                      amandaross@example.com
                    </span>
                  </li> */}
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Course:</span>
                    <span className="text-gray-700">English, Spanish</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Total Points:</span>
                    <span className="text-gray-700">New York, US</span>
                  </li>
                  <li className="flex items-center border-b py-2 space-x-2">
                    <span className="font-bold w-24">Elsewhere:</span>
                    <a href="#" title="Facebook">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 506.86 506.86"
                      >
                        <path
                          fill="#1877f2"
                          d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                        ></path>
                      </svg>
                    </a>
                    <a href="#" title="Twitter">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 333333 333333"
                      >
                        <path
                          fill="#1da1f2"
                          d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                        ></path>
                      </svg>
                    </a>

                    <a href="#" title="LinkedIn">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 333333 333333"
                      >
                        <path
                          fill="#0077b5"
                          d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                        ></path>
                      </svg>
                    </a>

                    <a href="#" title="GitHub">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path
                          fill="#000000"
                          d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 w-full">
            <div className="w-full flex flex-col ">
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">
                  Personal Info
                </h4>
                <ul className="mt-2 text-gray-700">
                  <li className="flex items-center border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className=" items-center text-gray-700">
                      <input
                        className="peer  h-8 w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="text"
                      />
                    </span>
                  </li>
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Linkedin Profile:</span>
                    <span className="text-gray-700">
                      <input
                        className="peer  h-8 w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="text"
                      />
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Github Profile:</span>
                    <span className="text-gray-700">
                      <input
                        className="peer  h-8 w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="text"
                      />
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Course:</span>
                    <span className="text-gray-700">
                      <input
                        className="peer  h-8 w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="text"
                      />
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Clubs:</span>
                    <span className="text-gray-700">
                      <input
                        className="peer  h-8 w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="text"
                      />
                    </span>
                  </li>
                  {/* <li className="flex border-b py-2">
                    <span className="font-bold w-24">Location:</span>
                    <span className="text-gray-700">
                      <input
                        className="peer  h-8 w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="text"
                      />
                    </span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Languages:</span>
                    <span className="text-gray-700">
                      <input
                        className="peer  h-8 w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="text"
                      />
                    </span>
                  </li> */}
                  <li className="flex items-center border-b py-2 space-x-2">
                    <span className="font-bold w-24">Elsewhere:</span>
                    <a href="#" title="Facebook">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 506.86 506.86"
                      >
                        <path
                          fill="#1877f2"
                          d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                        ></path>
                      </svg>
                    </a>
                    <a href="#" title="Twitter">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 333333 333333"
                      >
                        <path
                          fill="#1da1f2"
                          d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                        ></path>
                      </svg>
                    </a>

                    <a href="#" title="LinkedIn">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 333333 333333"
                      >
                        <path
                          fill="#0077b5"
                          d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                        ></path>
                      </svg>
                    </a>

                    <a href="#" title="GitHub">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path
                          fill="#000000"
                          d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>

                <button onClick={fetchData}> Click Me!</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
