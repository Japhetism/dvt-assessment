import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MusicDetailsView from './music.details.view';

export const MusicDetailsContainer = () => {

    const dispatch = useDispatch();

    const defaultState = useSelector((state) => state);

    useEffect(() => {
        //UniversityService.loadUniversities(dispatch)
    }, [dispatch])


    return <MusicDetailsView universities={defaultState} />
}