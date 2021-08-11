import React, { useState } from 'react';
import { Grid, makeStyles, List, ListItem, ListItemText, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ImageNishu from '../image/circle-cropped.png';
import DrawerList from './DrawerList';

const useStyles = makeStyles({
    top: {
        height: '30vh',
        color: '#ffffff',
        backgroundColor: '#407f9d',
        fontStyle: 'italic',
        fontSize: '165%',
        fontFamily: 'cursive',
        padding: '2%'
    },
    drawer: {
        width: '300px',
        fontFamily: 'cursive',
        fontStyle: 'italic'
    }
});
const HomeHeader = () => {
    const [ menu, setMenu ] = useState(false);
    const classes = useStyles();
    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenu(open);
    };

    return (
        <React.Fragment>
            <Grid container item xs={12} className={classes.top} direction="column">
                <Grid container item md={6} sm={8} xs={12}>
                    Hello,<br /> I'm Nishu Rai, currently pursuing Bachelors of Engineering in Information technology from Army Institute of Technology, Pune. I have keen interest
                    in web development and competitive coding
                </Grid>
                <Grid container item xs={0} sm={0} md={6}>
                    <Grid container item direction="column" justifyContent="flex-end" alignItems="flex-end">
                        <MenuIcon fontSize="large" onClick={toggleDrawer(true)} />
                        <div>
                            <Drawer anchor="right" open={menu} onClose={toggleDrawer(false)}>
                                <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className={classes.drawer}>
                                    <DrawerList />
                                </div>
                            </Drawer>
                        </div>
                        <img src={ImageNishu} width="30%" alt="nishu" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid />
        </React.Fragment>
    );
};

export default HomeHeader;
