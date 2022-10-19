import React from 'react';


import {Link} from "react-router-dom";

// // import style from './MoviesListCard.module.scss';
// import {StarsRating} from "../../components";
import {IMAGE_PATH} from "../../configs";


const MoviesListCard = ({movie}) => {
    const {
        id,
        poster_path,
        original_title,
        // release_date,
        // vote_average,
        title
    } = movie;

    return (
        <div >
            <Link  to={`/${id}`}>
                <div>
                    {/*<Badge*/}
                    {/*    badgeContent={vote_average.toFixed(1)}*/}
                    {/*    color='secondary'>*/}

                        <div >
                            <img src={IMAGE_PATH + poster_path} alt={title}/>
                            <div>
                                <p>{original_title}</p>
                            </div>
                        </div>
                    {/*</Badge>*/}
                </div>

                {/*<div >*/}
                {/*    <StarsRating average={vote_average}/>*/}
                {/*    <p>{release_date}</p>*/}
                {/*</div>*/}
            </Link>
        </div>
    )
}

export {MoviesListCard}