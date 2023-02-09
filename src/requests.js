const API_KEY ='2580365ca006fb344b51ff01cf009594'
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fatchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fatchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

//https://api.themoviedb.org/3/movie/550?api_key=2580365ca006fb344b51ff01cf009594