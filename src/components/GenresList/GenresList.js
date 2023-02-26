import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../redux";
import {Genre} from "../Genre/Genre";
import {routersPoint} from "../../routes";
import css from './genreList.module.css';

const GenresList = () => {
    const dispatch = useDispatch();
    const {genres, themeStatus} = useSelector(state => state.genre);
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch])

    return (
        <div className={`${css.genreLeftMenu} `}>
            <div onClick={() => navigate(`/${routersPoint.movies}`)}
                 className={`${css.genreItem} ${themeStatus ? css.genreItemDark : css.genreItemLight}`}><h4>All
                films</h4></div>
            <div onClick={() => navigate(`/${routersPoint.movies}`)}
                 className={`${css.genreItem} ${themeStatus ? css.genreItemDark : css.genreItemLight}`}><h4>All
                genres</h4></div>
            {
                !!genres.length &&
                genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {GenresList};