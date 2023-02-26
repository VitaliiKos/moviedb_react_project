import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './genre.module.css';

const Genre = ({genre}) => {
    const {themeStatus} = useSelector(state => state.genre);

    const navigate = useNavigate();
    const {name} = genre;

    return (
        <>
            <div onClick={() => navigate(`/movies?with_genres=${genre.id}&page=1`)}
                 className={`${css.genreItem} ${themeStatus ? css.genreItemDark : css.genreItemLight}`}>
                <h4>{name}</h4>
            </div>
        </>
    );
};

export {Genre};