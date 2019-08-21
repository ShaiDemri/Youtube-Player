let youtubeVideo = require('../apis/YouTubeApi').youtubeVideo
const API_KEY = 'AIzaSyCcWmaf7iLO5tHc7Rn0LOf6NJOJKccMOXk';

export const fetchVideos = () => async dispatch => {
    const response = await ['mr9kK0_7x08','_CTUs_2hq6Y','vv1mFAMz0PE'];//await backendapi.get('/videos');
    response.map(async res=> {
        await youtubeVideo({key: API_KEY, id: res}, video => {
            dispatch(addVideoToList(video))
        })
    });
};

export const addVideoToList = (video) => {
    return {
        type: 'VIDEO_ADDED',
        payload: video
    }
};
export const removeVideoFromList = (videoId) => {
    return {
        type: 'VIDEO_REMOVED',
        payload: videoId
    }
};
