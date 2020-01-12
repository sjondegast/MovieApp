// var tmdb = {};

// tmdb.config = {
//   base_uri: "http://api.themoviedb.org/3/",
//   api_key: "api_key=013879648df52f8aa502e420aec34dfa"
// };

class tmdb {
  constructor({ page }) {
    this.base_url = "http://api.themoviedb.org/3/";
    this.api_key = "api_key=013879648df52f8aa502e420aec34dfa";
    this.resourse = "";
    this.page = `&page=${page}` || "&page=1";
  }
  discover(media) {
    let mediaType = media.toLowerCase();
    if (mediaType !== "movie" && mediaType !== "tv") {
      console.log(
        `The selected media type ${mediaType} is not supported. Use Movie or Tv`
      );
    } else {
      this.resourse = `discover/${mediaType}?`;
      return this;
    }
  }
  sort_by(param) {
    console.log(param);
    this.sort_by = param;
    return this;
  }
  query() {
    let endpoint = `${this.base_url}${this.resourse}${this.api_key}${this.sort_by}${this.page}`;
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        return result;
      });
  }
}

// new tmdb({ page: 1 }).discover("tv");

let query = new tmdb({ page: 2 })
  .discover("movie")
  .sort_by("&sort_by=popularity.desc")
  .query();

console.log(query);

// .sortBy("&sort_by=popularity.desc")
// param, order
