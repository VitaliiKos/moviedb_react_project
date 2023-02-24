import React from 'react';
import {Outlet} from "react-router-dom";

import {GenresList} from "../../components";
import css from './moviePage.module.css';

const MoviesPage = () => {

    return (
        <div className={css.container}>
            <div className={css.genreWrap}>
                <GenresList/>
            </div>

            <div className={css.movieWrap}>
                <div>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export {MoviesPage};