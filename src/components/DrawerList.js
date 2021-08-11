import React from 'react';
import { ListItem, List, ListItemText } from '@material-ui/core';
const DrawerList = () => {
    return (
        <div>
            <List>
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
