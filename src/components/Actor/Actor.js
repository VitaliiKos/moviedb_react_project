import React from 'react';

import css from './actor.module.css';
import {imageUrl} from "../../config";

const Actor = ({actor}) => {
    const {name, profile_path, known_for_department} = actor;
    return (
        <>
            {profile_path &&
                (<div className={css.actorCard}>

                        <div className={css.title}>
                            <div><h5>{name}</h5></div>
                        </div>
                        <div className={css.actorPoster}>
                            <img src={imageUrl + profile_path} alt={known_for_department}/>
                        </div>
                    </div>
                )
            }
        </>
    );
};


export {Actor};