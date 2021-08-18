import React from 'react';
import { Grid, Paper, Typography, makeStyles, Tooltip } from '@material-ui/core';
import './styles.css';
import html from '../../image/html.jpg';
import css from '../../image/css.png';
import js from '../../image/js.png';
import react from '../../image/react.png';
import bootstrap from '../../image/bootstrap.png';
import node from '../../image/nodejs.png';
import firebase from '../../image/firebase.png';
import express from '../../image/e.png';
const useStyles = makeStyles({
    box: {
        padding: '1%',
        marginBottom: '3%'
    },
    text: {
        marginBottom: '1%',
        fontFamily: 'Atkinson Hyperlegible',
        fontWeight: '800',
        fontSize: '110%'
    }
});
const SkillComponent = () => {
    const classes = useStyles();
    return (
        <Grid container item sm={5} xs={12} direction="column">
            <h2>Skills</h2>
            <Paper className={classes.box}>
                <Typography className={classes.text}>Frontend</Typography>
                <Tooltip title="HTML">
                    <img src={html} alt="html" width="70" className="img" />
                </Tooltip>
                <Tooltip title="CSS">
                    <img src={css} alt="css" width="90" className="img" />
                </Tooltip>
                <Tooltip title="JS">
                    <img src={js} alt="js" width="80" className="img" />
                </Tooltip>
                <Tooltip title=" REACT JS">
                    <img src={react} alt="react" width="90" className="img" />
                </Tooltip>
                <Tooltip title=" BOOTSTRAP">
                    <img src={bootstrap} alt="bootstrap" width="80" className="img" />
                </Tooltip>
            </Paper>
            <Paper className={classes.box}>
                <Typography className={classes.text}>Backend</Typography>
                <Tooltip title="NODE">
                    <img src={node} alt="node" width="100" className="img" />
                </Tooltip>
                <Tooltip title="FIREBASE">
                    <img src={firebase} alt="firebase" width="90" className="img" />
                </Tooltip>
                <Tooltip title="EXPRESS JS">
                    <img src={express} alt="js" width="85" className="img" />
                </Tooltip>
                <Tooltip title=" REACT JS">
                    <img src={react} alt="react" width="90" className="img" />
                </Tooltip>
                <Tooltip title=" BOOTSTRAP">
                    <img src={bootstrap} alt="bootstrap" width="80" className="img" />
                </Tooltip>
            </Paper>
            <Paper className={classes.box}>
                <Typography className={classes.text}>Others</Typography>
                <Tooltip title="HTML">
                    <img src={html} alt="html" width="70" className="img" />
                </Tooltip>
                <Tooltip title="CSS">
                    <img src={css} alt="css" width="90" className="img" />
                </Tooltip>
                <Tooltip title="JS">
                    <img src={js} alt="js" width="80" className="img" />
                </Tooltip>
                <Tooltip title=" REACT JS">
                    <img src={react} alt="react" width="90" className="img" />
                </Tooltip>
                <Tooltip title=" BOOTSTRAP">
                    <img src={bootstrap} alt="bootstrap" width="80" className="img" />
                </Tooltip>
            </Paper>
        </Grid>
    );
};

export default SkillComponent;
