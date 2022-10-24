import {useDispatch} from "react-redux";

import style from './SidebarCategory.module.scss';
import {movieActive} from "../../redux/slices";


const initialPageNumber = 1

const SidebarCategory = ({category}) => {
    const {name, id} = category;
    const dispatch = useDispatch();

    const changeGenres = (id) => {
        dispatch(movieActive.getSelectedGenre({selectedCategoryId:id, numberPage: initialPageNumber}))
    }

    return (
        <div>
            <button
                className={style.btn}
                onClick={() => changeGenres(id)}
            >{name}</button>
        </div>
    )
}

export {SidebarCategory};