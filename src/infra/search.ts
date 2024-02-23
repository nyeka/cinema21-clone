import axios from "axios";

export const getListMovie = async (typeList: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${typeList}?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.tmdbToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export default async function GetDetailsMovie(id: number) {
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

export const getListSimiliarMovies = async (id: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.tmdbToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const SearchMovieName = async (movieName: string) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.tmdbToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
