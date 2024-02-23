import axios from "axios";
import { options } from "./option";
import Moviecard from "@/components/cards/moviecard";
import { Header } from "@/components/navbar/header";
import { getListMovie } from "@/infra/search";

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
  const listPopular = await getListMovie("popular");

  return (
    <div className="bg-slate-200">
      <div>
        <Header text="Now Playing" />
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
      <div>
        <Header text="Popular" />
        <div className="bg-slate-200 py-7 px-5 flex flex-row flex-wrap justify-around gap-12">
          {listPopular.results.slice(0, 5).map((item: any) => {
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
    </div>
  );
}
