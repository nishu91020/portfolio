import React, { useState } from 'react';
import { Grid, Drawer, makeStyles } from '@material-ui/core';
import DrawerList from '../../components/DrawerList';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    drawer: {
        width: '300px',
        fontFamily: 'cursive',
        fontStyle: 'italic'
    },
    header: {
        background: '#407f9d',
        color: '#ffffff',
        fontFamily: 'Atkinson Hyperlegible',
        fontSize: '200%',
        padding: '0.5%'
    }
});
const Header = props => {
    const classes = useStyles();
    const [ menu, setMenu ] = useState();
    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMenu(open);
    };
    return (
        <Grid container item className={classes.header} direction="column">
            <Grid container item alignItems="center">
                <Grid container item justifyContent="flex-start" sm={10}>
                    {props.title}
                </Grid>
                <Grid container item justifyContent="flex-end" sm={2}>
                    <MenuIcon fontSize="large" onClick={toggleDrawer(true)} />
                </Grid>
            </Grid>

            <div>
                <Drawer anchor="right" open={menu} onClose={toggleDrawer(false)}>
                    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className={classes.drawer}>
                        <DrawerList />
                    </div>
                </Drawer>
            </div>
        </Grid>
    );
};

export default Header;
