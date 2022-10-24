// import React, {useEffect} from 'react';
// import { useSelector} from "react-redux";
// import {movieActive} from "../../redux/slices";
// import {useForm} from "react-hook-form";
// import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Link} from "@mui/material";
import style from './search.module.scss'
// import {searchActions} from "../../redux/slices/SearchSlice";
// import {searchReducer} from "../../redux/slices"

export default function Search() {
    // const dispatch = useDispatch;
    const [value, setValue] = useState('')
    // const {search} = useSelector(state => state.search)

    // const filterMovies=movies.filter?(movies=>{movies.title.includes(value)
    // })

    // useEffect(()=>{
    //     dispatch(searchActions.getAll())
    // },[])

    return (
        <div>
            <div className={css.InputGroup}>
                <form>

                    <input
                        type="text"
                        placeholder="The name of the movie"
                        onChange={(event) => setValue(event.target.value)}
                        // value={query}

                    />

                    <Link to={`https://api.themoviedb.org/3/search/keyword?api_key=cf291f909b66fe22fc9b39f223f0616f&query=${value}`}>
                        <button className={css.unit}><i
                            className="fa-solid fa-magnifying-glass"></i></button>
                    </Link>

                </form>
                {/*onClick={() => dispatch(movieActions.getByTitle({value}))}*/}
                {/*console.log(search)*/}
                {/*<div className="movies">*/}
                {/*    {search.results?.map(movie => <Movie key={movie.id} movie={movie}/>)}*/}
                {/*</div>*/}

                {/*// </ff>*/}

            </div>


        </div>
    );
}