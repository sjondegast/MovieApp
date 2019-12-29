/*
url: api_base_url + 
api_base_url: "https://api.themoviedb.org/3/"

protocol: is the technologie that will be used to transfer the data, usually http or https
Domain: is the domain name, tealium.com for example
Path: relates to the section and page on the site
hash: relates to a section within the page
Query string contains data that is being passed to the page


protocol: 
*/

// let api = {
//   url_params: {
//     protocol: "https://",
//     sub_domain: "api.",
//     domain: "themoviedb.org/3/"
//   },
//   path: "discover/", // discover, find, search, trending etc. refers to file or location like api
//   query: "movie?", //directly follows the domain, path or port number (right after path) and seperate with questionmark
//   api_key: "013879648df52f8aa502e420aec34dfa",
//   params: {
//     test: "test1",
//     sjaak: "sjaak1"
//   }, // parameters start with a questionmark ? and are seperaterd with a ampersand (&) key-value pairs seperated by an equal sign =
//   path: pathName => {
//     this.pathName = pathName;
//     return this;
//   }
// };

// let url = {
//   base_url: "https://api.themoviedb.org/3/",
//   api_key: "013879648df52f8aa502e420aec34dfa",
//   path: pathName => {
//     this.pathName = pathName;
//     return this;
//   },
//   query: queryString => {
//     this.queryString = queryString;
//     return this;
//   },
//   params: param => {
//     this.param = param;
//     return this;
//   },
//   build: () => {
//     return this.base_url;
//   }
// };
// const query = new url();
// let test = query.path("movies");
// // let test = url.path("movies");
// console.log(test);

const tmdb = {
  base_url: "https://api.themoviedb.org/3/",
  api_key: "api_key=013879648df52f8aa502e420aec34dfa"
};

class url {
  constructor({ base_url, api_key } = tmdb) {
    // pass in the base_url and key, then convert it to pass in the protocol, domain, sub-domain.
    this.base_url = base_url;
    this.api_key = api_key;
    this.api_path_options = ["discover", "trending"];
  }
  path(pathName) {
    //check if pathName is valid
    this.api_path_options.map(path_option => {
      if (path_option === pathName) {
        return pathName;
      } else {
        return false;
      }
    });
    this.pathName = `${pathName}/`;
    return this;
  }
  query(queryString) {
    //check if methods/query and params are valid
    // complete queryString with ? questionmark
    this.queryString = `${queryString}?`;
    return this;
  }
  sort_by() {
    // return sort method
    //
  }
  params(params) {
    // give it predefined object with default values, them go trough them and test if they are valid params for given path and query
    let param = Object.keys(params).map(param => {
      return param[param];
    });
    this.params = `&${param}`;
    return this;
  }
  // return statement for classes
  build() {
    console.log(
      `${this.base_url}${this.pathName}${this.queryString}${this.api_key}${this.params}`
    );
  }
}

// maybe give paramaters to new url(url_params: protocol, domein, sub_domein, key)
let query = new url()
  .path("discover")
  .query("movie")
  .params({ sort_by: "popularity" })
  .build();

//   .params("sort_by=popularity.desc") //need to give in object, and set predifined paramaters to params

// const queryString = Object.keys(url.params).map(param => {
//   return `${url[param]}`;
// });s

// Object.keys(url).map(key => {
//   let string = "";
//   string.concat(url[key]);
//   console.log(key);
//   console.log(url[key]);
//   //   console.log(string);
// });

/*
  base_url:
  https://api.themoviedb.org/3/
  path: discover //seperatre with a / after the pathName
  query: movie?
  params: sort_by=popularity.desc
  
  */
