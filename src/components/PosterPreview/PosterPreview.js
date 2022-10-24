import style from './PosterPreview.module.scss';

import {IMAGE_PATH, img} from "../../constats";

const PosterPreview = ({bgPath, title}) => {
    return (
        <div className={style.poster}>
            <img src={bgPath? IMAGE_PATH + bgPath: img} alt={title}/>
        </div>
    )
}

export {PosterPreview};