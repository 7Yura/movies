import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    categories: [],
    movie: null,
    movies: [],

    currentGenres: [],
    loading: true,
    errors: null,
    selectedGenre: null,
    numberPage: null,
    infoAboutMovie: []
};
const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

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
//  const getSearchMovie = createAsyncThunk(
//     'moviesSlice/getSearchMovie',
//     async ({query,page}, {rejectWithValue}) => {
//         try{
//             const {data} = await moviesService.getSearchMovie(query,page);
//             return data;
//         }
//         catch(e){
//             return rejectWithValue(e.response.data)
//         }
//     }
// );
const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async (arg, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.searchMovie(arg);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);
const searchByGenre = createAsyncThunk(
    'movieSlice/searchByGenre',
    async ({currentGenres}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.searchByGenre(currentGenres)
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
)

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
            // .addCase(getNameMovies.fulfilled, (state, action) => {
            //     state.movies = action.payload.result
            // })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false
            })
            .addCase(searchMovie.pending, (state) => {
                state.loading = true
            })
            .addCase(searchByGenre.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false;
            })
            .addCase(searchByGenre.pending, (state) => {
                state.loading = true;
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
    getAllMovie,
    getCategories,
    getMovieGenres,
    getSelectedGenre,
    getNumPage,
    getAllAboutMovie,
    searchMovie,
    searchByGenre
}

export {
    movieReducer,
    movieActive
}






