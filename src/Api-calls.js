const apiCalls = {
  getMovies() {
      return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => {
        if(!res.ok){
          throw Error();
        }else {
          return res.json();
        };
      })
    },

  getSingleMovie(id) {
      return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`).then(res => {
        if(!res.ok){
          throw Error();
        }else {
          return res.json();
        };
      })
    },

  getMovieTrailers(id) {
      return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`).then(res => {
        if(!res.ok){
          throw Error();
        }else {
          return res.json();
        };
      })
    },
};

export { apiCalls };
