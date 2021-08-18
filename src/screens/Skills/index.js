import React from 'react';
import Header from '../../components/Header';
import { Grid, makeStyles } from '@material-ui/core';
import './styles.css';
import Education from '../../components/Education';
import SkillComponent from '../../components/SkillComponent';

const useStyles = makeStyles({
    outer: {
        padding: '1%',
        fontFamily: 'Atkinson Hyperlegible'
    }
});

const Skills = () => {
    const classes = useStyles();

    return (
        <div className="skillContainer">
            <Header title="Education &amp; Skills" />
            <Grid container item justifyContent="center" className={classes.outer} direction="row">
                <Education />
                <SkillComponent />
            </Grid>
        </div>
    );
};

export default Skills;
