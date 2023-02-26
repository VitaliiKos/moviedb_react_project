import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    loading: null,
    errors: null,
    total_pages: null,
    total_results: null,
    current_page: 1,
    current_movie: null,
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({query}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(query)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const getWithSearchParams = createAsyncThunk(
    'movieSlice/getWithSearchParams',
    async ({params}, thunkAPI) => {
        try {
            const {data} = await movieService.getWithSearch(params)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({params}, thunkAPI) => {
        try {
            const {data} = await movieService.getById(params)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,

    reducers: {},

    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
                const {page, results, total_pages, total_results} = action.payload;
                state.movies = results;
                state.current_page = page;
                state.total_pages = total_pages;
                state.total_results = total_results;
                state.loading = false
                state.current_movie = null
            }
        )
        .addCase(getAll.rejected, (state, action) => {
            state.loading = false
            state.errors = action.payload
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.loading = false
            state.current_movie = action.payload
        })
        .addCase(getById.rejected, (state, action) => {
            state.loading = false
            state.errors = action.payload
        })
        .addCase(getById.pending, (state) => {
            state.loading = true
        })
        .addCase(getWithSearchParams.fulfilled, (state, action) => {

                const {results, total_pages, total_results} = action.payload;
                state.movies = results;
                state.total_pages = total_pages;
                state.total_results = total_results;
                state.loading = false
                state.current_movie = null
            }
        )
        .addCase(getWithSearchParams.rejected, (state, action) => {
            state.loading = false
            state.errors = action.payload
        })
        .addCase(getWithSearchParams.pending, (state) => {
            state.loading = true
        })
})

const {reducer: movieReducer, actions: {set_params_for_search, set_params_for_filter}} = movieSlice;

const movieActions = {getAll, getById, getWithSearchParams, set_params_for_search, set_params_for_filter}

export {
    movieReducer,
    movieActions
}