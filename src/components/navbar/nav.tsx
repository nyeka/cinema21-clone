import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <div>
      <div className="bg-dark-700 flex justify-between items-center px-5">
        <Image src="/logo.png" alt="/logo.jpg" width={200} height={150} />
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>
      <div className="bg-slate-200 text-black">
        <ul className="flex justify-between w-1/2 py-4 px-5 font-semibold">
          <li className="hover:text-slate-500">Now Playing</li>
          <li>Upcoming</li>
          <li>Theaters</li>
          <li>Promotions</li>
          <li>Info 21</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
