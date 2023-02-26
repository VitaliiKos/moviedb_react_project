import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";
import {page_param_key} from "../../constants";
import {FilterForm} from "../FilterForm/FilterForm";
import css from "./movieList.module.css";

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

            <div className={css.moviesList}>
                {
                    !!movies.length &&
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>

            <div className={css.container}>
                <ul className={css.pagination}>
                    <li hidden={Number(params_for_search[page_param_key]) < 2} onClick={() => {
                        change_number_page(-1)
                    }}><a>Previous</a></li>

                    <li hidden={Number(params_for_search[page_param_key]) < 2} onClick={() => {
                        set_number_page(1)
                    }}><a>1</a></li>

                    <li hidden={Number(params_for_search[page_param_key]) < 3} onClick={() => {
                        set_number_page(2)
                    }}><a>2</a></li>

                    <li hidden={Number(params_for_search[page_param_key]) < 4} onClick={() => {
                        set_number_page(3)
                    }}><a>3</a></li>

                    <li className={css.notPage}><a>...</a></li>

                    <li hidden={Number(params_for_search[page_param_key]) + 1 >= 500 ||
                        Number(params_for_search[page_param_key]) + 1 >= total_pages}
                        onClick={() => {
                            change_number_page(1)
                        }}><a>{Number(params_for_search[page_param_key]) + 1}</a></li>

                    <li hidden={Number(params_for_search[page_param_key]) + 2 >= 500 ||
                        Number(params_for_search[page_param_key]) + 2 >= total_pages} onClick={() => {
                        change_number_page(2)
                    }}><a>{Number(params_for_search[page_param_key]) + 2}</a></li>

                    <li hidden={
                        Number(params_for_search[page_param_key]) === total_pages ||
                        Number(params_for_search[page_param_key]) >= 500
                    } onClick={() => {
                        set_number_page(total_pages > 500 ? 500 : total_pages)
                    }}><a> {total_pages > 500 ? 500 : total_pages}</a></li>

                    <li hidden={Number(params_for_search[page_param_key]) >= 500 ||
                        Number(params_for_search[page_param_key]) === total_pages
                    } onClick={() => {
                        change_number_page(1)
                    }}><a>Next</a></li>
                </ul>
            </div>

        </div>
    );
};

export {MoviesList};