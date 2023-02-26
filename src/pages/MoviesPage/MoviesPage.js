import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {GenresList} from "../../components";
import css from './moviePage.module.css';

const MoviesPage = () => {
    const {themeStatus} = useSelector(state => state.genre);

    return (
        <div className={css.container}>
            <div className={`${css.genreWrap} ${themeStatus ? css.genreWrapDark : css.genreWrapLight}`}>
                <GenresList/>
            </div>

            <div className={`${css.movieWrap} ${themeStatus ? css.movieWrapDark : css.movieWrapLight}`}>
                <div>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export {MoviesPage};