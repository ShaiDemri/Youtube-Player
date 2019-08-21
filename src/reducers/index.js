import {combineReducers} from 'redux';

const fetchVideosReducer = (state=[],action) => {
    console.log('fetchVideosReducer ');
    switch (action.type) {
        case 'FETCH_VIDEOS':
            return [...state,...action.payload];
        case 'VIDEO_ADDED':
            return [...state,...action.payload];
        case 'VIDEO_REMOVED':

            const videos = state.filter(({ id }) => id !== action.payload.id);
            return   [...videos] ;
        default:
            return state
    }};

export default combineReducers({
    fetchVideos:fetchVideosReducer,
});
