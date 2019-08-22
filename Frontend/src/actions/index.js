import axios from 'axios';
let youtubeVideo = require('../apis/YouTubeApi').youtubeVideo
const API_KEY = 'AIzaSyCcWmaf7iLO5tHc7Rn0LOf6NJOJKccMOXk';

export const fetchVideos = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:5000');
        response.data.map(async res=> {
            await youtubeVideo({key: API_KEY, id: res}, video => {
                //dispatch(addVideoToList(video))
                dispatch({type:"FETCHED_VIDEO",payload:video})
            })
        });
    } catch (err){
        console.log('Got an error!', JSON.stringify(err))
    }

};

export const addVideoToList = video => async dispatch => {
    const id=video[0].id;
    await axios.post(`http://localhost:5000/?link=${id}`);
    return dispatch({type: 'VIDEO_ADDED',
        payload: video})
};
export const removeVideoFromList = (videoId) => {
    console.log('videoId',videoId);
    return {
        type: 'VIDEO_REMOVED',
        payload: videoId
    }
};
