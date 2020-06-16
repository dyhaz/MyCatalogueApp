class DataSource {
  static getAnime() {
    return fetch("https://api.jikan.moe/v3/top/anime/1/upcoming")
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        return responseJson;
      })
      .catch(error => {
        console.log(error);
      });
  }

  static searchAnime(keyword) {
    return fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=100`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      })
  }

  static getAnimeDetail(id) {
    return fetch(`https://api.jikan.moe/v3/anime/${id}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`anime not found`);
        }
      })
  }

  static getMostPopular() {
    return fetch(`https://api.jikan.moe/v3/top/anime/1/airing`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`anime not found`);
        }
      })
  }
}

export default DataSource;
