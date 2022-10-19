import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Pagination} from "@mui/material";

import {MoviesListCard} from "../../components";
import {movieActive} from "../../redux";
// import style from "./MoviesListCards.module.scss";


const MoviesListCards = () => {
    const [page, setPage] = useState(1);
    const [pageQty] = useState(500);

    const {movies} = useSelector((state) => state.movies);
    const {selectedGenre} = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActive.getMovieGenres(selectedGenre, page));
    }, [dispatch, page, selectedGenre]);

    const onPageChange = (num) => {
        setPage(num);
        dispatch(movieActive.getNumPage(num));

        const selectedCategory = Object.assign({}, selectedGenre);
        selectedCategory.numberPage = num;

        dispatch(movieActive.getSelectedGenre(selectedCategory));
    };

    return (
        <div >
            <div >
                {movies.map((movie, index) => (
                    <MoviesListCard key={index} movie={movie}/>
                ))}
            </div>

            <div >
                <Pagination
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => onPageChange(num)}
                    color="secondary"
                />
            </div>
        </div>
    );
};

export {MoviesListCards};