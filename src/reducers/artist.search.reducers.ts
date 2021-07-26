const initialState = {
    artistList: [],
    loading: true,
    error: false,
};

const artistReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOAD_ARTISTS':
            return {
                ...state,
                artistList: [],
                error: false,
                loading: true
            }
        case 'GET_ARTISTS':
            return {
                ...state,
                artistList: action.payload,
                error: false,
                loading: false,
            }
        case 'ERROR_ARTIST':
            return {
                ...state,
                artistList: [],
                error: true,
                loading: false
            }
        default:
            return state;
    }
};

export default artistReducer;