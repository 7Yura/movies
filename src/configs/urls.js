const baseURL = 'https://api.themoviedb.org/3';
const api_key = 'cf291f909b66fe22fc9b39f223f0616f';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
const language = 'en-US';
const img = 'https://alexeybychkov.com/blog/help/preloader/';

const urls = {
    movies: '/discover/movie',
    genres: '/genre/movie/list',
    movieId: '/movie'
}

export {
    baseURL,
    api_key,
    urls,
    IMAGE_PATH,
    language,
    img
}