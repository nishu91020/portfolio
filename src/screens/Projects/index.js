import React from 'react';
import Header from '../../components/Header';
import './styles.css';
import ProjectCard from '../../components/ProjectCard';
import teams from '../../image/homeImg.jpg';
import oss from '../../image/oss.svg';
import { Grid, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    cards: {
        padding: '1%'
    }
});
const Projects = () => {
    const classes = useStyles();
    const desc = [
        'It is platform for quick meets and chat that comes with the feature of preview before join and managing audio and video settings',
        'A webpage made for the open source club of AIT for the announcement of various programs and declaring results for events organized by open source club'
    ];
    return (
        <div className="projectContainer">
            <Header title="Projects" />
            <Grid container item className={classes.cards}>
                <ProjectCard img={teams} title="Meetup" description={desc[0]} />
                <ProjectCard img={oss} title="AIT OSS Club" description={desc[1]} />
            </Grid>
        </div>
    );
};

export default Projects;
