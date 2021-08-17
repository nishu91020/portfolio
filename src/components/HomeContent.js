import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
import SocialIcons from '../components/SocialIcons';

const useStyles = makeStyles({
    content: {
        padding: '2%',
        paddingTop: '12%',
        fontFamily: 'Atkinson Hyperlegible',
        fontSize: '200%'
    },
    left: {
        paddingLeft: '1%'
    }
});
const HomeContent = () => {
    const classes = useStyles();
    return (
        <Grid container item className={classes.content} justifyContent="center">
            <Grid container item md={5} sm={8} xs={12} className={classes.left}>
                Hello,<br /> I'm Nishu Rai, currently pursuing Bachelors of Engineering in Information technology from Army Institute of Technology, Pune. I have keen interest in
                web development and competitive coding
                <Button variant="outlined" size="large" style={{ margin: '3%' }}>
                    Download Resume
                </Button>
            </Grid>
            <Grid container item md={5} className={classes.left} alignItems="center">
                <SocialIcons />
            </Grid>
        </Grid>
    );
};

export default HomeContent;
