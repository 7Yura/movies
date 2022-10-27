import {Badge} from "@mui/material";
import {Link} from "react-router-dom";
// import CornerRibbon from "react-corner-ribbon";

import style from './MoviesListCard.module.scss';
import {StarsRating} from "../../components";
import {IMAGE_PATH} from "../../constats";
import {useSelector} from "react-redux";


const MoviesListCard = ({movie}) => {
    const {
        id,
        poster_path,
        original_title,
        release_date,
        vote_average,
        genre_ids,
        title
    } = movie;
    const { categories} = useSelector(state => state.movies)
        const genreMovie = categories.find(value => value.id === genre_ids[0])

    return (
        <div className={style.card}>
            <Link className={style.link} to={`/${id}`}>
                <div>
                      {/*<Badge/>*/}
                    <Badge
                        badgeContent={genreMovie?.name}

                        color='secondary'>

                        <div className={style.card__img}>
                            <img src={IMAGE_PATH + poster_path} alt={title}/>
                            <div>
                                <p>{original_title}</p>
                            </div>
                        </div>
                    </Badge>
                    {/*<CornerRibbon*/}
                    {/*    position="top-right"*/}
                    {/*    fontColor="#f0f0f0"*/}
                    {/*    backgroundColor="#600F0F"*/}
                    {/*    containerStyle={{}}*/}
                    {/*    style={{}}*/}
                    {/*    className=""*/}
                    {/*>*/}
                    {/*    <div className={style.card__img}>*!/*/}
                    {/*                <img src={IMAGE_PATH + poster_path} alt={title}/>*/}
                    {/*                <div>*/}
                    {/*                    <p>{original_title}</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*    {genreMovie?.name}*/}
                    {/*</CornerRibbon>*/}
                </div>

                <div className={style.star_wrap}>
                    <StarsRating average={vote_average}/>
                    <p>{release_date}</p>
                </div>
            </Link>
        </div>
    )
}

export {MoviesListCard};