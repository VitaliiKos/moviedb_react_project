import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../Movie/Movie";
import css from "./movieList.module.css";
import {page_param_key} from "../../constants";
import {FilterForm} from "../FilterForm/FilterForm";

const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies, total_pages} = useSelector(state => state.movie);
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    const params_for_search = Object.fromEntries([...searchParams]);

    const set_number_page = (page) => {
        params_for_search[page_param_key] = page
        setSearchParams(params_for_search)
    };
    const change_number_page = (page) => {
        params_for_search[page_param_key] = Number(params_for_search[page_param_key]) + page
        setSearchParams(params_for_search)
    };

    useEffect(() => {
        if (params_for_search['query']) {
            dispatch(movieActions.getWithSearchParams({params: params_for_search}))
        } else {
            dispatch(movieActions.getAll({query: params_for_search}))
        }
    }, [dispatch, searchParams])

    return (
        <div className={css.wrapper}>
            <FilterForm/>

            <div>

                <button hidden={Number(params_for_search[page_param_key]) < 2} onClick={() => {
                    set_number_page(1)
                }}>
                    1
                </button>

                <button hidden={Number(params_for_search[page_param_key]) < 3} onClick={() => {
                    set_number_page(2)
                }}>
                    2
                </button>

                <button hidden={Number(params_for_search[page_param_key]) - 5 < 1} onClick={() => {
                    change_number_page(-5)
                }}>
                    -5
                </button>

                <button hidden={
                    Number(params_for_search[page_param_key]) < 2
                } onClick={() => {
                    change_number_page(-1)
                }}>
                    Prev
                </button>

                <button>
                    Pages
                </button>

                <button hidden={
                    Number(params_for_search[page_param_key]) >= 500 ||
                    Number(params_for_search[page_param_key]) === total_pages
                } onClick={() => {
                    change_number_page(1)
                }}>
                    Next
                </button>

                <button hidden={
                    Number(params_for_search[page_param_key]) + 10 >= 500 ||
                    Number(params_for_search[page_param_key]) + 10 >= total_pages
                } onClick={() => {
                    change_number_page(10)
                }}>
                    +10
                </button>

                <button hidden={
                    Number(params_for_search[page_param_key]) === total_pages ||
                    Number(params_for_search[page_param_key]) >= 500
                } onClick={() => {
                    set_number_page(total_pages > 500 ? 500 : total_pages)
                }}>
                    {total_pages > 500 ? 500 : total_pages}
                </button>



            </div>

            <div className={css.moviesList}>
                {
                    !!movies.length &&
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export {MoviesList};