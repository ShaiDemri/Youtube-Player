var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

var youtubeCall = async function (options, callback) {
    if (!options.key) {
        throw new Error('Youtube Search expected key, received undefined');
    }

    var params = {
        part: 'snippet',
        key: options.key,
        q: {
            term: options.term,
        },
        type: 'video'
    };

    let list = [];
    const response = await axios.get(ROOT_URL, {params: params});
    if (callback) {
        for (let i = 0; i < response.data.items.length; i++) {
            const url = `https://www.googleapis.com/youtube/v3/videos?id=${response.data.items[i].id.videoId}&part=snippet,contentDetails&key=${options.key}&q=%7B%22term%22:%22dogs%22%7D`;
            const res = await axios.get(url);
            list.push(...res.data.items);
        }
        callback(list);
    }
};

exports.youtubeCall = youtubeCall;


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


var ROOT_URL_ID = 'https://www.googleapis.com/youtube/v3/videos';

var youtubeVideo = async function (options, callback) {
    if (!options.key) {
        throw new Error('Youtube Search expected key, received undefined');
    }

    var params = {
        part: 'snippet,contentDetails',
        key: options.key,
        id: options.id,
    };

    const response = await axios.get(ROOT_URL_ID, {params});
    callback(response.data.items);
};

exports.youtubeVideo = youtubeVideo;

