import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWVmN2MxZDQ3ZDA4OWUyOTAyMzA1YWY2M2Y2Nzg3MiIsInN1YiI6IjYxMzEzYWJkMWZiOTRmMDA2NDg5ZjRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zirp-mmT92ruyw7MiLJWlr6PMHmuwvdltkQFXURxVwM'
    }
});

const discoverMovie = async (page) => await instance.get('/discover/movie?page=' + page);
const genresMovie = async () => await instance.get('/genre/movie/list');
const getMovieByGenre = async (id, page) => await instance.get('/discover/movie?with_genres=' + id + '&page=' + page);
const searchMovie = async (text, page) => await instance.get('/search/movie?query=' + text + '&page=' + page);
const authenticationUser = async () => await instance.get('/authentication/token/new');
const guest_session = async () => await instance.get('/authentication/guest_session/new');


export {discoverMovie, genresMovie, getMovieByGenre, searchMovie, authenticationUser, guest_session};