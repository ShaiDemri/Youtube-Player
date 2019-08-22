import React, {useState} from 'react';

import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing.unit,
    },
}));
const SearchBar = ({searchVideo}) => {
    const classes = useStyles();

    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <Grid container direction={'row'} wrap={'nowrap'} justify={"flex-start"} alignItems={'center'} >
            <Grid item xs={1}/>
            <Grid item xs={'auto'} >
                <TextField
                    id="outlined-textarea"
                    label="Paste YouTube link"
                    placeholder={"Search for Youtube video"}
                    value={term}
                    onChange={event => onInputChange(event)}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </Grid>

            <Grid item xs={1}>
                <Button size={'small'} variant="contained" color="primary" className={classes.button} onClick={()=>searchVideo(term)}>
                    add+
                </Button>
            </Grid>


        </Grid>
    );
};


export default SearchBar;
