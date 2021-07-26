import { combineReducers } from "redux";
import artistReducer from "./artist.search.reducers";

const rootReducers = combineReducers({
    artistData: artistReducer,
});

export default rootReducers;