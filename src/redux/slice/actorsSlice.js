import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {actorsService} from "../../services";


const initialState = {
    actors: [],
    loading: null,
    errors: null,
    themeStatus: true,
    famousActor:null

};

const getAll = createAsyncThunk(
    'actorsSlice/getAll',
    async (movieId, thunkAPI) => {
        try {
            const {data} = await actorsService.getAll(movieId)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const selectActor = createAsyncThunk(
    'actorsSlice/selectActor',
    async (id, thunkAPI) => {
        try {
            const {data} = await actorsService.selectActor(id)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)




const actorSlice = createSlice({
    name: 'actorsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {cast} = action.payload
            state.actors = cast;
            state.loading = false
        })
        .addCase(getAll.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true;
        })
        .addCase(selectActor.fulfilled, (state, action) => {
            state.famousActor = action.payload;
            state.loading = false
        })
        .addCase(selectActor.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload
        })
        .addCase(selectActor.pending, (state) => {
            state.loading = true;
        })



});

const {reducer: actorReducer} = actorSlice;
const actorActions = {getAll, selectActor}

export {
    actorReducer,
    actorActions
}

