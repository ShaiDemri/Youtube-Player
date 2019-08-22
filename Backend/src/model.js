let videoList = [];

const addVideo = async (link) => {
    console.log('In Add Video Model');
    videoList.push(link);
    return;
};


const getAllVideos = async () => {
    console.log('In get all Videos');
    return videoList;
};


const deleteVideo = async (link) => {
    console.log('In Delete Video Model');
    let newList = [];
    videoList.forEach((item) => {
        if(item !== link){
            newList.push(item);
        }
    });

    videoList = newList;
    return videoList;
};



module.exports = {
    addVideo,
    deleteVideo,
    getAllVideos
}
