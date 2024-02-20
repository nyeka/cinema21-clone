import React from "react";
import axios from "axios";

async function GetDetailsMovie(id: number) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.tmdbToken}`,
      },
    }
  );
  return res.data;
}

const Page = async ({ params }: any) => {
  const data = await GetDetailsMovie(params.id);
  return (
    <div className="p-5 flex flex-col gap-12 mt-6">
      <div className="text-3xl">Details</div>
      <div className="flex gap-6">
        <div>
          <img
            src={`${process.env.image}/${data.poster_path}`}
            alt={data.title}
            width={400}
            height={350}
          />
          <div className="text-center font-semobold bg-slate-900 text-white p-1">
            Buy Ticket
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-3xl">{data.title}</p>
          <div className="flex flex-col gap-2">
            <p>Original Title: {data?.original_title}</p>
            <p>Rating: {data?.vote_average}</p>
            <div className="flex gap-2">
              Genre:
              {data.genres.map((item: any) => {
                return <div key={item.id}>{item.name},</div>;
              })}
            </div>
            <div className="flex gap-2">
              production companies:
              {data.production_companies.map((item: any) => {
                return <div key={item.id}>{item.name},</div>;
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">Synopsis</p>
            <p>{data?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
