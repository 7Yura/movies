import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genresMovie, getMovieByGenre, searchMovie} from "../../services/movie.api.service";
// import MoviesListCard from "../moviesListCard/MoviesListCard";
import './FormFilterMovies.css';
import {genres_Movies, moviesByGenre, search_Movie} from "../../redux/actions";
// import {MoviesListCards} from "../MoviesListCards/MoviesListCards";
// import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

export default function FormFilterMovies(page) {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let [genreChange, setGenreChange] = useState(28);
    let [search, setSearch] = useState('');
    let {genres, movies} = state;

    useEffect(() => {
        genresMovie().then(value => dispatch(genres_Movies(value.data.genres)))
    }, [])

    let onFormSubmit = (e) => {
        e.preventDefault();
    }
    let onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    let onGenreChange = (e) => {
        setGenreChange(e.target.value)
    }
    let onClickGenre = () => {
        getMovieByGenre(genreChange).then(value => dispatch(moviesByGenre(value.data.results)))
    }
    let onClickSearchMovie = () => {
        searchMovie(search).then(value => dispatch(search_Movie(value.data.results)))
    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className={'wrap_filter'}>
                    <div>
                        <label onSelect={'genres'}>Знайти фільми за жанром:</label>
                        <select name={'genres'} value={genreChange} onChange={onGenreChange}>
                            {genres.map(value => <option value={value.id}>{value.name} </option>)}
                        </select>
                        <button onClick={onClickGenre}>Ok</button>
                    </div>
                    <div><label onInput={'search'}>Знайти фільми за назвою:</label>
                        <input type="text" name={'search'} value={search} onChange={onSearchChange}
                               placeholder={'Введіть назву фільму'}/>
                        <button onClick={onClickSearchMovie}>Ok</button>
                    </div>
                </div>
            </form>
            <div className={'wrap_movies_list'}>{movies.length > 0 && movies.map(value => <div
                className={'movies_list_card'}>
                {/*<MoviesListCard*/}
                {/*    key={value.id}*/}
                {/*    item={value}/>*/}
            </div>)
            }
        </div>
        </div>
    );
}