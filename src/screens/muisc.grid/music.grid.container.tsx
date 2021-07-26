import React from 'react';
import {useSelector} from 'react-redux';
import MusicGridView from './music.grid.view';

export const MusicGridContainer = () => {

    const defaultState = useSelector((state) => state);

    return <MusicGridView artists={defaultState} />
}