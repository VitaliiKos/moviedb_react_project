import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: []
    },
    reducers: {},
    extraReducers: {}
})

const {reducer:movieReducer} = movieSlice;

export {
    movieReducer
}