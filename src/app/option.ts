export const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/discover/movie?language=en-US",
  headers: {
    Authorization: `Bearer ${process.env.tmdbToken}`,
  },
};
