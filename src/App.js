import React from 'react';
import {MainLayout} from "./Layouts";
import {Route, Routes} from "react-router-dom";
import {routersPoint} from "./routes";

import {FavoritePage, HomePage, MovieDetailPage, MoviesPage, PageNotFound, UserPage} from "./pages";
import {MoviesList} from "./components";
import css from './app.module.css';

const App = () => {
    return (
        <div className={css.app}>
            <Routes>
                <Route path={routersPoint.index} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={routersPoint.movies} element={<MoviesPage/>}>
                        <Route index element={<MoviesList/>}/>
                        <Route path={routersPoint.moviesId} element={<MovieDetailPage/>}/>
                    </Route>
                    <Route path={routersPoint.favorites} element={<FavoritePage/>}/>
                    <Route path={routersPoint.userInfo} element={<UserPage/>}/>
                    <Route path={routersPoint.notFound} element={<PageNotFound/>}/>


                </Route>
            </Routes>
        </div>
    );
};

export {App};