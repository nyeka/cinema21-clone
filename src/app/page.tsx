import Image from "next/image";
import axios from "axios";
import { options } from "./option";
import Moviecard from "@/components/cards/moviecard";

async function GetData() {
  try {
    const res = await axios.request(options);
    return res.data;
  } catch (error) {
    return { data: "error" };
  }
}

export default async function Page() {
  const data = await GetData();
  return (
    <div>
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
