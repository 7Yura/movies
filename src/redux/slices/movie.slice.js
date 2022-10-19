import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    categories: [],
    movies: [],
    errors: null,
    selectedGenre: null,
    numberPage: null,
    infoAboutMovie: []
};

const getCategories = createAsyncThunk(
    'movieSlice/getCategories',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getGenres();
            return data.genres;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMovieGenres = createAsyncThunk(
    'movieSlice/getMovieGenres',
    async (input, {rejectWithValue}) => {
        try {

            if (!input || !input.selectedCategoryId) {
                // initial start or without genre(all)
                const {data} = await moviesService.getMovies(input?.numberPage || 1);
                return data.results
            }

            // with genre
            let {selectedCategoryId, numberPage} = input;
            const {data} = await moviesService.getMoviesWithGenres(selectedCategoryId, numberPage);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getAllAboutMovie = createAsyncThunk(
    'movieSlice/getAllAboutMovie',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovieId(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload
        },
        getNumPage: (state, action) => {
            state.numberPage = action.payload
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(getMovieGenres.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getAllAboutMovie.fulfilled, (state, action) => {
                state.infoAboutMovie = action.payload
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);

                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })
});

const {reducer: movieReducer, actions: {getSelectedGenre, getNumPage}} = movieSlice;


const movieActive = {
    getCategories,
    getMovieGenres,
    getSelectedGenre,
    getNumPage,
    getAllAboutMovie
}

export {
    movieReducer,
    movieActive
}