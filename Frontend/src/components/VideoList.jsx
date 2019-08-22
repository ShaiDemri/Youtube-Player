import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VideoListItem from "./VideoListItem";
import {connect} from 'react-redux';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


const VideoList = ({videos}) => {
    const classes = useStyles();


    return (
            <Grid item xs={6} md={3}>
                <Typography variant="h6" className={classes.title}>
                    Videos
                </Typography>
                <Paper className={classes.demo} style={{height:250,maxHeight: 250, overflow: 'auto'}}>
                    <List dense={true}>
                        {videos.map(video => <VideoListItem key={video.etag} video={video} />,
                        )}
                    </List>
                </Paper>
            </Grid>
    );
};
const mapStateToProps=(state)=>{
    return {videos:state.fetchVideos};

};
export default connect(mapStateToProps)(VideoList);
