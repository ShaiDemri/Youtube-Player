import React from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

var parseDuration = require('../apis/timeParser').parseDuration;


const VideoListItem = ({video}) => {
    return (
        <ListItem divider>
            <ListItemText
                primary={video.snippet.title}
                secondary={parseDuration(video.contentDetails.duration)}
            />
        </ListItem>
    );
};


export default VideoListItem;
