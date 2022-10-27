import style from './MoviesList.module.scss';
import {MoviesListCards} from "../../components";
// import {useState} from "react";
// import {useSelector} from "react-redux";
import { Search} from "../Search/Search";
// import {useLocation} from "react-router-dom";





const MoviesList = () => {
    // const [value,setValue]=useState('')
    // const {movies} = useSelector((state) => state.movies);


    // const filterMovies = movies.filter(movie=>{
    //     return movie.original_title.toLowerCase().includes(value.toLowerCase())
    // })

    return (
        <div className={style.content}>
            <div>
                <div className={style.mov}>

                    <h2> Movies search: </h2>
                    {/*<form>*/}
                    {/*    <input type="text" placeholder={'name movies'}*/}
                    {/*           onChange={(event) => setValue(event.target.value)}/>*/}

                    {/*</form>*/}
                    {/*{pathname === '/movies' && <FindForm/>}*/}

                    <Search/>
                </div>
                {/*<Search/>*/}
                {/*<div className={style.head}>*/}
                {/*    <h2>Movie online</h2>*/}
                {/*</div>*/}
                <MoviesListCards />
            </div>
        </div>
    );
}

export {MoviesList};