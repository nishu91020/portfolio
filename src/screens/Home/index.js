import React from 'react';
import './styles.css';
import { Grid, makeStyles } from '@material-ui/core';
import HomeHeader from '../../components/HomeHeader';

const useStyles = makeStyles({
    container: {
        background: 'rgba(119, 119, 66, 0.2)',
        height: '100vh',
        width: '100%'
    }
});
const Home = () => {
    const classes = useStyles();
    return (
        <Grid item container xs={12} className={classes.container}>
            <HomeHeader />
        </Grid>
    );
};

export default Home;
