import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MusicGridView from './music.grid.view';
import ArtistSearchService from '../../services/artist.search';

export const MusicGridContainer = () => {

    const defaultState = useSelector((state) => state);

    return <MusicGridView artists={defaultState} />
}