import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {actorActions} from "../../redux";
import {Actor} from "../Actor/Actor";
import css from './actorsList.module.css';

const ActorList = ({movieId}) => {
    const {themeStatus} = useSelector(state => state.genre);
    const dispatch = useDispatch();
    const {actors} = useSelector(state => state.actor);

    useEffect(() => {
        dispatch(actorActions.getAll(movieId))
    }, [dispatch, movieId])

    return (
        <div className={`${css.actorsList} ${!themeStatus ? css.actorsList : css.actorsListLight}`}>
            {
                actors &&
                actors.map(actor => <Actor key={actor.id} actor={actor}/>)
            }
        </div>
    );
};

export {ActorList};