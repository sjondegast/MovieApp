const Api = () => {
  return console.log("this is the api script");
};

export const fetchData = endpoint => {
  fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      let response = result;
      console.log(response);
    });
};

export const getMovieData = async endpoint => {
  const response = await (await fetch(endpoint)).json();
  console.log(response);
};

const tmdb = {
  config: {
    api_key: "844dba0bfd8f3a4f3799f6130ef9e335",
    api_base_url: "https://api.themoviedb.org/3/",
    image_base_url: "http://image.tmdb.org/t/p/",
    language: "en-US"
  },
  generateUrl: ({ params }) => {
    const url =
      tmdb.config.api_base_url +
      params.type +
      params.filter +
      "api_key=" +
      tmdb.config.api_key +
      "&language=" +
      tmdb.config.language +
      "&page=1";
    return url;
  },
  getPopularMovies: async ({ ...params }) => {
    // const params = {
    //   type: "movie/",
    //   filter: "popular?"
    // };
    const url = tmdb.generateUrl({ params });
    const response = await (await fetch(url)).json();
    return response;
  }
};
// tv is also working!
// make a method to get the data, all other methods will use this just like the generateUrl method!

export { tmdb };
export default Api;

// const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
