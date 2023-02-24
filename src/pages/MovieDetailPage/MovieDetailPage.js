import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {MovieDetail} from "../../components";

const MovieDetailPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {current_movie} = useSelector(state => state.movie);

    useEffect(() => {

        dispatch(movieActions.getById({params: {id, trailer: {append_to_response: 'videos'}}}))
    }, [dispatch, id])

    return (
        <div>

            {current_movie &&
                <MovieDetail current_movie={current_movie}/>
            }
        </div>
    );
};

export {MovieDetailPage};