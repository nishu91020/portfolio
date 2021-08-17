import React from 'react';
import { Card, CardMedia, CardContent, Typography, makeStyles, Button } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        maxWidth: 430,
        padding: '0.5%',
        margin: '1%'
    }
});
const ProjectCard = props => {
    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={5}>
            <CardMedia component="img" alt="project image" height="250" image={props.img} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <Button color="primary">Github Repo</Button>
            <Button color="primary">Demo</Button>
        </Card>
    );
};

export default ProjectCard;
