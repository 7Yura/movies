import {Footer, Header} from "../components";
import {MoviesPage} from "../containers";
import style from './App.module.scss';

export const App = () => {
    return (
        <div className={style.App}>
            <Header/>
            <MoviesPage/>
            <Footer/>
        </div>
    );
}
