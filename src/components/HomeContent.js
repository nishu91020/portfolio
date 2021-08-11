import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    content: {
        padding: '2%'
    }
});
const HomeContent = () => {
    const classes = useStyles();
    return (
        <Grid container item direction="row" className={classes.content}>
            <Button variant="outlined" size="large">
                Download Resume
            </Button>
        </Grid>
    );
};

export default HomeContent;
