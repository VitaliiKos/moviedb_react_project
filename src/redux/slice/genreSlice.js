import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";


const initialState = {
    genres:[],
    loading : null,
    errors:null,
    themeStatus:null

};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI)=>{
        try {
            const {data} = await genreService.getAll()
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const  genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{
        chooseTheme: (state,action) => {
            state.themeStatus = action.payload
        },
    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
            const {genres} = action.payload;
            state.genres = genres;
            state.loading = false
        })
        .addCase(getAll.rejected, (state, action)=>{
            state.loading = false;
            state.errors = action.payload
        })
        .addCase(getAll.pending, (state)=>{
            state.loading = true;
        })

});

const {reducer:genreReducer, actions:{chooseTheme}} = genreSlice;
const genreActions = {getAll, chooseTheme}

export {
    genreReducer,
    genreActions
}

