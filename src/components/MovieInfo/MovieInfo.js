import {useParams} from "react-router-dom";
import { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {Badge} from "@mui/material";

import style from './MovieInfo.module.scss';
import {PosterPreview} from "../../components";
import {IMAGE_PATH, img} from "../../constats";
import {movieActive} from "../../redux/slices";



const MovieInfo = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {infoAboutMovie} = useSelector(state => state.movies);


    const {
        backdrop_path,
        original_title,
        overview,
        tagline,
        poster_path,
        release_date,
        genres
    } = infoAboutMovie;

    useEffect(() => {
        dispatch(movieActive.getAllAboutMovie(id))

    }, [dispatch, id]);

    console.log({infoAboutMovie});

    return (
        <div className={style.movie_info}>
            <div className={style.movie_info__title}>
                <h2>{original_title}</h2>
            </div>

            <div className={style.wrap_info}>

                {/*<Badge*/}
                {/*badgeContent = {vote_average.toFixed(1)}*/}
                {/*    color='secondary'>*/}
                    <div className={style.wrap_info__img}>
                    <img src={poster_path? IMAGE_PATH + poster_path: img} alt={original_title}/>
                    </div>
                {/*</Badge>*/}
                <div className={style.wrap_info__text}>
                    <div>
                        <h4>Name:</h4>
                        <p>{original_title}</p>
                    </div>
                    <div>
                        <h4>Genres:</h4>
                        <p> {!genres||genres[0]?.name} </p>
                        <p>/  {!genres||genres[1]?.name}</p>
                        <p>/  {!genres||genres[2]?.name}</p>
                        <p>/  {!genres||genres[3]?.name}</p>


                    </div>

                    <div>
                        <h4>Data:</h4>
                        <p>{release_date}</p>
                    </div>

                    <h4>{tagline}</h4>
                </div>
            </div>

            <div className={style.movie_info__overview}>
                <p>{overview}</p>
            </div>

            <PosterPreview
                bgPath={backdrop_path}
                title={original_title}
            />
        </div>
    )
}

export {MovieInfo};