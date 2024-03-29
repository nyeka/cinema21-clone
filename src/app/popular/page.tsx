import Moviecard from "@/components/cards/moviecard";
import { getListMovie } from "@/infra/search";
import React from "react";

export default async function Page() {
  const data = await getListMovie("popular");
  return (
    <div className="bg-slate-200">
      <p className="text-black mt-12 font-medium text-4xl text-center">
        Popular
      </p>
      <div className="bg-slate-200 py-7 px-5 flex flex-row flex-wrap justify-around gap-12">
        {data.results.map((item: any) => {
          return (
            <Moviecard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item?.poster_path}
              rating={item?.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
