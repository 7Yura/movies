import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import style from './Sidebar.module.scss';
import {movieActive} from "../../redux/slices";
import {SidebarCategory} from "../../components";


const Sidebar = () => {
    const {categories} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActive.getCategories())
    }, []);


    return (
        <div className={style.sidebar}>
            <div className={style.title_wrap}>
                <h2>Categories</h2>
            </div>

            <div className={style.btn_group}>
                {categories.map((category, index) => <SidebarCategory
                    key={index}
                    category={category}
                />)}
            </div>
        </div>
    )
}

export {Sidebar};