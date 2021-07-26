import Communication from "./communication";
import config from '../config';

const ArtistSearchService = {

    loadArtists(dispatch: any, artist: string) {
        console.log("dispatch", dispatch)
        console.log("artist is ", artist)
        dispatch({
            type: 'LOAD_ARTISTS',
            payload: null
        })
        Communication.getMethod(`${config.endpoints.artistSearch}${artist}`).then(artists => {
            dispatch({
                type: 'GET_ARTISTS',
                payload: artists
            })
        })
        .catch(() => {
            dispatch({
                type: 'ERROR_ARTIST',
                payload: null
            })
        })
        .finally(() => {

        })
    }
}

export default ArtistSearchService;