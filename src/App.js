import React from 'react';
import {MainLayout} from "./Layouts";
import {Route, Routes} from "react-router-dom";
import {routersPoint} from "./routes";
import {HomePage, MoviesPage, PageNotFound} from "./pages";
import {MovieDetail} from "./components";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={routersPoint.index} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={routersPoint.movies} element={<MoviesPage/>}>
                        <Route path={routersPoint.moviesId} element={<MovieDetail/>}/>
                    </Route>
                    <Route path={routersPoint.notFound} element={<PageNotFound/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export {App};