"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Moviecard = (movie: {
  title: string;
  image: string;
  rating: number;
  id: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="card w-fit cursor-pointer md:w-64 bg-base-100 shadow-xl"
      onClick={() => {
        router.push(`/details/${movie.id}`);
      }}
    >
      <figure>
        <img
          src={`${process.env.image}/${movie.image}`}
          alt={movie.title}
          width={200}
          height={150}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-medium">
          Movie
          <div className="badge badge-secondary">{movie.rating}</div>
        </h2>
        <p>{movie.title}</p>
      </div>
    </div>
  );
};

export default Moviecard;
