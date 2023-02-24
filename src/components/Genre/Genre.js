import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './genre.module.css';

const Genre = ({genre}) => {
    const navigate = useNavigate();
    const {name} = genre;

    return (
        <div className={css.genreItem}>
            <div onClick={() => navigate(`/movies?with_genres=${genre.id}&page=1`)}>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export {Genre};