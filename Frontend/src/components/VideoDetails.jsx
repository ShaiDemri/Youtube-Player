import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from "@material-ui/core/Grid";
import YouTube from 'react-youtube';
import {connect} from 'react-redux';
import {removeVideoFromList} from "../actions";

const useStyles = makeStyles({
    card: {
        display: 'block',
    },

    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 1,
        paddingBottom: 1
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

const VideoDetails = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    // autoplay video
    const onPlayerReady = (event) => {
        event.target.playVideo();
    };

    // when video ends
    const onPlayerStateChange = (event) => {
        if (event.data === 0) {
            props.removeVideoFromList(props.fetchVideos[0]);
        }
    };
    const opts = {
        width: 560,
        height: 315,
        backgroundColor: 'black',
        playerVars: {
            autoplay: 1
        }
    };
    if (props.fetchVideos.length<=0) {
        return <div>Please add videos to the playlist.</div>
    }
    // const url = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
    // const title = video.snippet.title;
    const video = props.fetchVideos[0];
    return (
        <Grid item>
            <Card className={classes.card}>
                <YouTube
                    videoId={video.id}
                    opts={opts}
                    onReady={onPlayerReady}
                    onEnd={onPlayerStateChange}
                />
                <Grid container justify="center" className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon/> : <SkipPreviousIcon/>}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon}/>
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon/> : <SkipNextIcon/>}
                    </IconButton>
                </Grid>
            </Card>
        </Grid>);
};

const mapStateToProps = state => {
    return {fetchVideos:state.fetchVideos};
};
export default connect(mapStateToProps,{removeVideoFromList})(VideoDetails);
