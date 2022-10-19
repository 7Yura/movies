// import style from './MoviesList.module.scss';
import {MoviesListCards} from "../../components";


const MoviesList = () => {
    return (
        <div >
            <div>
                <div >
                    <h2>Movie online</h2>
                </div>

                <MoviesListCards/>
            </div>
        </div>
    )
}

export {MoviesList};