import React from 'react';
import {useSelector} from "react-redux";

import css from './actor.module.css';
import {imageUrl} from "../../config";

const Actor = ({actor}) => {
    const {themeStatus} = useSelector(state => state.genre);
    const {character, name, profile_path, known_for_department} = actor;
    console.log(actor)
    return (
        <>
            {profile_path &&
                (<div className={!themeStatus ? css.actorDetail : css.actorDetailLight}>
                        <div className={css.actorPoster}>
                            <img src={imageUrl + profile_path} alt={known_for_department}/>
                        </div>

                        <div className={css.actorPosterDescription}>
                            <div><h5>{name}</h5></div>
                            <div><h5>{character}</h5></div>

                        </div>
                    </div>
                )
            }
            
        </>
    );
};


export {Actor};