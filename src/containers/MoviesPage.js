import {Route, Routes} from 'react-router-dom';

import style from './MoviePage.module.scss';
import {MovieInfo, MoviesList, Sidebar} from "../components";


const MoviesPage = () => {
    return (
        <div className={style.content}>
            <Sidebar/>
            <Routes>
                <Route path={'/'} element={<MoviesList/>}/>
                <Route path={'/:id'} element={<MovieInfo/>}/>
            </Routes>
        </div>
    )
}

export {MoviesPage};