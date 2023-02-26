import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favoriteMovies: {},
    loading: null,
    errors: null,
    favoriteCount: 0

};


const favoriteSlice = createSlice({
    name: "favoriteSlice",
    initialState,
    reducers: {
        add_to_favorite: (state, action) => {
            const favoriteMovies = JSON.parse(localStorage.getItem('myMovies'));
            const resObj = favoriteMovies ? JSON.parse(localStorage.getItem('myMovies')) : {};
            resObj[action.payload.id] = {movie: action.payload};
            localStorage.setItem("myMovies", JSON.stringify(resObj));

            state.favoriteMovies = resObj
            state.favoriteCount = Object.keys(state.favoriteMovies).length
        },
        remove_from_favorite: (state, action) => {
            delete state.favoriteMovies[action.payload.id]
            const favoriteMovies = JSON.parse(localStorage.getItem('myMovies'));
            delete favoriteMovies[action.payload.id]
            localStorage.setItem("myMovies", JSON.stringify(favoriteMovies));
            state.favoriteCount = Object.keys(state.favoriteMovies).length
        },

        count_favorite: (state, action) => {
            state.favoriteCount = action.payload
        },
        update_favorite: (state, action) => {
            state.favoriteMovies = action.payload.movie
            state.favoriteCount = action.payload.count
        },

    },
    extraReducers: builder => builder
})


const {
    reducer: favoriteReducer,
    actions: {add_to_favorite, count_favorite, update_favorite, remove_from_favorite}
} = favoriteSlice;
const favoriteActions = {add_to_favorite, count_favorite, update_favorite, remove_from_favorite}

export {
    favoriteReducer,
    favoriteActions
}