import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../redux/slice/genreSlice";
import {Genre} from "../Genre/Genre";
import {genre_param_key, page_param_key} from "../../constants";
import css from './genreList.module.css';

const GenresList = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genre);


    const [searchParams,setSearchParams] = useSearchParams({page:'1'});

    const resetGenre = () => {
        const params_for_search = Object.fromEntries([...searchParams])
        delete params_for_search[genre_param_key];
        params_for_search[page_param_key] = 1;
        setSearchParams(params_for_search)
    }
    const resetFilters = () => {
        const params_for_search = {};
        params_for_search[page_param_key] = 1;
        setSearchParams(params_for_search)
    }

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])
    
    return (
        <div className={css.genreLeftMenu}>
            <div onClick={()=>resetFilters()}><h4>All films</h4></div>
            <div onClick={()=>resetGenre()}><h4>All genres</h4></div>

            {
                !!genres.length &&
                genres.map(genre=> <Genre key={genre.id} genre={genre}/>)
            }
            
        </div>
    );
};

export {GenresList};