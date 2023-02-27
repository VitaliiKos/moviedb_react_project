import React from 'react';
import {useSelector} from "react-redux";

import css from './userProfile.module.css';
import {imageUrl} from "../../config";

const UserProfile = () => {
    const {famousActor} = useSelector(state => state.actor)

    const {
        biography,
        birthday,
        homepage,
        known_for_department,
        name,
        place_of_birth,
        profile_path
    } = famousActor;

    return (
        <div className={css.actorBlock}>
            <div className={css.mainDetails}>
                <div className={css.mainPhoto}>
                    <img src={imageUrl + profile_path} alt={name}/>
                </div>

                <div>
                    <h1>{name}</h1>
                    <h2>{birthday}</h2>
                    <h2>{place_of_birth}</h2>
                    <h2>{known_for_department}</h2>
                    <h2><a href={homepage}>{homepage}</a></h2>
                </div>
            </div>

            <div className={css.userDescription}>
                <h3>{biography}</h3>
            </div>

        </div>    );
};

export {UserProfile};