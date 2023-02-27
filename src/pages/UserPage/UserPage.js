import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actorActions} from "../../redux";
import {famous_actor} from "../../constants";
import {UserProfile} from "../../components";

const UserPage = () => {
    const {famousActor} = useSelector(state => state.actor)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actorActions.selectActor(famous_actor))
    }, [dispatch])

    return (
        <div>
            {famousActor&& <UserProfile/>}

        </div>
    );
};

export {UserPage};