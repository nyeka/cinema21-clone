"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { SearchMovieName } from "@/infra/search";
import { useRouter } from "next/navigation";
import Link from "next/link";

const goToMovieDetails = async (search: string) => {
  const data = await SearchMovieName(search);
  const id = data.results[0].id;
  // router.push(`/details/${data.id}`);
  console.log(id);
};

const Nav = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="bg-dark-700 flex justify-between items-center px-5">
        <Image src="/logo.png" alt="/logo.jpg" width={200} height={150} />
        <label className="input input-bordered flex items-center gap-2">
          <button
            onClick={async () => {
              await goToMovieDetails(search);
            }}
          >
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
          </button>
          <input
            type="text"
            className="grow"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                await goToMovieDetails(search);
              }
            }}
            placeholder="Search"
          />
        </label>
      </div>
      <div className="bg-slate-200 text-black">
        <ul className="flex gap-12 pt-4  w-1/2 py-4 px-5 font-semibold">
          <Link href="/">
            <li className="hover:text-slate-500">Now Playing</li>
          </Link>
          <Link href="/upcoming">
            <li>Upcoming</li>
          </Link>
          <Link href="/top-rated">
            <li>Top Rated</li>
          </Link>
          <Link href={"/popular"}>
            <li>Popular</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
