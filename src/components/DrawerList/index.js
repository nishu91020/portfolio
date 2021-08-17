import React from 'react';
import { ListItem, List, ListItemText, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    listContainer: {
        display: 'block'
    }
});
const DrawerList = () => {
    const classes = useStyles();
    return (
        <div>
            <List className={classes.listContainer}>
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Projects" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Achievements" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Skills" />
                </ListItem>
            </List>
        </div>
    );
};

export default DrawerList;
