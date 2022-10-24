import {
    ADD_USER,
    DISCOVER_MOVIES,
    GENRES_MOVIES,
    MOVIES_BY_GENRE,
    SEARCH_MOVIE
} from "./actionTypes";

const discover_Movies = (value) => {
    return {type: DISCOVER_MOVIES, payload: value}
};
const search_Movie = (value) => {
    return {type: SEARCH_MOVIE, payload: value}
};

const genres_Movies = (value) => {
    return {type: GENRES_MOVIES, payload: value}
};

const moviesByGenre = (value) => {
    return {type: MOVIES_BY_GENRE, payload: value}
};

const addUser = (value) => {
    return {type: ADD_USER, payload: value}
}

export {discover_Movies, genres_Movies, moviesByGenre, search_Movie, addUser};