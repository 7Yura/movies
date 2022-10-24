import {Rating} from "@mui/material";
import {useState} from "react";

const StarsRating = ({average}) => {
    const [value, setValue] = useState(average);

    return (
        <div>
            <Rating
                name="simple-controlled"
                value={+value}
                max={10}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    )
}

export {StarsRating};