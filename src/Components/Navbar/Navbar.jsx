import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/L.png';
import logoCenter from '../../assets/lucir.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    const resolution = window.innerWidth;
    const isMobile = resolution >= 320 && resolution <= 480;


    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar style={{ backgroundColor: '#e3cdf7' }}>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Lucir Store" height="50px" className={classes.image} />
                </Typography>
                {!isMobile ? (
                    <div className={classes.centerLogo} >
                        <img src={logoCenter} alt="Lucir Logo" height="50px" className={classes.image} />
                    </div>) : null}
                <div className={classes.grow} />
                {location.pathname === '/' || location.pathname === '/shop' || location.pathname === '/product/prod_G6kVw73bKKw2eD' || location.pathname === '/product/prod_O3bR5XBbz1wnzd' ? (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>) : null}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
