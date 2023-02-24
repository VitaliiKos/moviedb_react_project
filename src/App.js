import React from 'react';
import {MainLayout} from "./Layouts";
import {Route, Routes} from "react-router-dom";
import {routersPoint} from "./routes";

import {FavoritePage, HomePage, MovieDetailPage, MoviesPage, PageNotFound} from "./pages";
import {MoviesList} from "./components";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={routersPoint.index} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={routersPoint.movies} element={<MoviesPage/>}>
                        <Route index element={<MoviesList/>}/>
                        <Route path={routersPoint.moviesId} element={<MovieDetailPage/>}/>
                    </Route>
                    <Route path={routersPoint.favorites} element={<FavoritePage/>}/>
                    <Route path={routersPoint.notFound} element={<PageNotFound/>}/>


                </Route>
            </Routes>
        </div>
    );
};

export {App};