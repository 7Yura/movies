import {axiosService} from "./axios.service";
import {api_key, language, urls} from "../constats";

const moviesService = {
    getMovies: (page=1) => axiosService.get(urls.movies, {
        params: {
            page: page,
            api_key,
            language,
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            with_watch_monetization_types: 'flatrate'
        }
    }),
    getMoviesWithGenres: (genre, page) => axiosService.get(urls.movies, {
        params: {
            page: page,
            api_key,
            with_genres: genre,
            language,
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            with_watch_monetization_types: 'flatrate'
        }
    }),
    getGenres: () => axiosService.get(`${urls.genres}`, {
        params: {
            api_key,
            language
        }
    }),
    getMovieId: (id) => axiosService.get(`${urls.movieId}/${id}`, {
        params: {
            api_key,
            language
        }
    }),
    // getMovies_Search: (page,) => axiosService.get(`${urls.movies_search}${name}`, {
    //     params: {
    //         page: page,
    //         name: name,
    //         api_key,
    //         language,
    //         sort_by: 'popularity.desc',
    //         include_adult: false,
    //         include_video: false,
    //         with_watch_monetization_types: 'flatrate'
    //     }
    // })
    getMovies_Search: (data)=>axiosService.get(`${urls.search}?query=${data}`,{
    params: {
        api_key,
        language
    }
})



}

export {moviesService};