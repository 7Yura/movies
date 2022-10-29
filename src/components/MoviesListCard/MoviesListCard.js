import {Badge} from "@mui/material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
// import CornerRibbon from "react-corner-ribbon";
// import {Badge} from "react-bootstrap/Badge";

import style from './MoviesListCard.module.scss';
import {StarsRating} from "../../components";
import {IMAGE_PATH} from "../../constats";



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
    const {categories} = useSelector(state => state.movies)
    const genreMovie = categories.find(value => value.id === genre_ids[0])
    const genreMovie1 = categories.find(value => value.id === genre_ids[1])
    const genreMovie2 = categories.find(value => value.id === genre_ids[2])
    const genreMovie3 = categories.find(value => value.id === genre_ids[3])
    return (
        <div className={style.card}>
            <Link className={style.link} to={`/${id}`}>
                <div>

                    <Badge
                        badgeContent={genreMovie?.name}

                        color='secondary'>

                        <div className={style.card__img}>
                            <img src={IMAGE_PATH + poster_path} alt={title}/>
                            <div>
                                <h3>{original_title}</h3>
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
                <div className={style.genres}>
                    <div className={style.g1}><h4> {genreMovie1?.name}</h4></div>
                    <div className={style.g1}><h4> {genreMovie2?.name}</h4></div>
                    <div className={style.g1}><h4> {genreMovie3?.name}</h4></div>
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