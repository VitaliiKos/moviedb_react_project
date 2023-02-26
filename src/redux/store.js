import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slice/movieSlice";
import {genreReducer} from "./slice/genreSlice";
import {favoriteReducer} from "./slice/favoriteSlice";
import {actorReducer} from "./slice/actorsSlice";

const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
    favorite: favoriteReducer,
    actor: actorReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})
export {setupStore}
