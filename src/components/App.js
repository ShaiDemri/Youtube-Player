import React, {useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from "./VideoDetails";
import Grid from "@material-ui/core/Grid";
import {connect} from 'react-redux';
import {addVideoToList, fetchVideos} from "../actions";
let youtubeVideo = require('../apis/YouTubeApi').youtubeVideo;
const API_KEY = 'AIzaSyCcWmaf7iLO5tHc7Rn0LOf6NJOJKccMOXk';

function App(props) {

    const searchVideo = async id => {
        await youtubeVideo({key: API_KEY, id: id}, video => {
           props.addVideoToList(video);
        })
    };

    useEffect(() => {
        (async () => {
            await props.fetchVideos();
        })();
    }, []);

    return (
        <Grid container direction={'column'}>
            <Grid item>
                <SearchBar searchVideo={searchVideo}/>
                <Grid container direction={'row'} alignItems={"center"} justify={"space-around"}>
                    <VideoList/>
                    <VideoDetails />
                </Grid>
            </Grid>
        </Grid>

    );
}

const mapStateToProps = state => {
    return {
        videos: state.fetchVideos,
    };
};

export default connect(mapStateToProps, {fetchVideos,addVideoToList})(App);
