import React, { useState } from 'react';
import { Grid, makeStyles, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ImageNishu from '../image/circle-cropped.png';
import DrawerList from '../components/DrawerList';

const useStyles = makeStyles({
    top: {
        height: '25vh',
        color: '#ffffff',
        backgroundColor: '#407f9d',
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
                <Grid container item direction="column" justifyContent="flex-end" alignItems="flex-end">
                    <MenuIcon fontSize="large" onClick={toggleDrawer(true)} />
                    <div>
                        <Drawer anchor="right" open={menu} onClose={toggleDrawer(false)}>
                            <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className={classes.drawer}>
                                <DrawerList />
                            </div>
                        </Drawer>
                    </div>
                    <Grid item container justifyContent="center">
                        <img src={ImageNishu} height="70%" alt="nishu" />
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default HomeHeader;
