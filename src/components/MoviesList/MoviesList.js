import style from './MoviesList.module.scss';
import {MoviesListCards} from "../../components";
import {useState} from "react";
import {useSelector} from "react-redux";





const MoviesList = () => {
    const [value,setValue]=useState('')
    const {movies} = useSelector((state) => state.movies);


    const filterMovies = movies.filter(movie=>{
        return movie.original_title.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <div className={style.content}>
            <div>
                <div className={style.mov}>

                    <h2> Movies search: </h2>
                    <form>
                        <input type="text" placeholder={'name movies'}
                               onChange={(event) => setValue(event.target.value)}/>

                    </form>

                    {/*<Search/>*/}
                </div>
                {/*<Search/>*/}
                {/*<div className={style.head}>*/}
                {/*    <h2>Movie online</h2>*/}
                {/*</div>*/}
                <MoviesListCards filterMovies={filterMovies}/>
            </div>
        </div>
    );
}

export {MoviesList};