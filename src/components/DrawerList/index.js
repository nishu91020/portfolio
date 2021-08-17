import React from 'react';
import { ListItem, List, ListItemText, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
    listContainer: {
        display: 'block'
    }
});
const DrawerList = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <List className={classes.listContainer}>
                <ListItem button>
                    <ListItemText primary="Home" onClick={() => history.push('/')} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Projects" onClick={() => history.push('/projects')} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Achievements" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Education &amp; Skills" onClick={() => history.push('/Skills')} />
                </ListItem>
            </List>
        </div>
    );
};

export default DrawerList;
