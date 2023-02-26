import React from 'react';
import {useSelector} from "react-redux";


import {MyFavoriteMovie} from "../../components";
import css from './favoritePage.module.css';

const FavoritePage = () => {
    const {themeStatus} = useSelector(state => state.genre);
    const {favoriteMovies} = useSelector(state => state.favorite);
    const favorite_movies_keys = Object.keys(favoriteMovies);

    return (
        <div className={`${css.favoritePage} ${themeStatus ? css.favoritePageDark : css.favoritePageLight}`}>
            {!!favorite_movies_keys.length &&
                favorite_movies_keys.map(movie =>
                    <MyFavoriteMovie key={favoriteMovies[movie].movie.id} myMovie={favoriteMovies[movie].movie}/>
                )
            }
        </div>
    );
};

export {FavoritePage};