import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Movie} from "../../components";

const FavoritePage = () => {
    const navigate = useNavigate();
    const {favoriteMovies} = useSelector(state => state.favorite);
    const favorite_movies_keys = Object.keys(favoriteMovies);

    return (
        <div>
            {
                favorite_movies_keys.map(movie =>
                    <div onClick={() => navigate(`/movies/${favoriteMovies[movie].movie.id}`)}
                         key={favoriteMovies[movie].movie.id}>
                        <Movie movie={favoriteMovies[movie].movie}/>
                    </div>
                )
            }

        </div>
    );
};

export {FavoritePage};