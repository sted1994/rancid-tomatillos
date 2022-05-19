
const apiCalls =
{
    getMovies() {
      return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
    },

  getSingleMovie(id) {
      return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`).then(res => res.json())
    },

  getMovieTrailers(id) {
      return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`).then(res => res.json())
    },
}
export { apiCalls }
