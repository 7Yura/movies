import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {movieActive} from "../../redux/slices";


const Search = () => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        if (query) {
            dispatch(movieActive.searchMovie(query))
        }
    },[query])

    const clear = (e) => {
        e.preventDefault()
        if (query) {
            dispatch(movieActive.searchMovie(query))
        }
        setQuery('');
    }

    return (
        <form>
            <input type="text"
                   placeholder={"name"}
                   onChange={(e) => setQuery(e.target.value)}
                   value={query}
            />
            <button onClick={clear}>  Clear  </button>




        </form>

    );



};

export {Search};