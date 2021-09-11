import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/L.png';
import logoCenter from '../../assets/lucir.png';
import useStyles from './styles';
import './Navbar.css'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    const resolution = window.innerWidth;
    const isMobile = resolution >= 320 && resolution <= 480;


    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar className={classes.navbar} >
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Lucir Store" height="50px" className={classes.image} />
                </Typography>
                <Typography  id = "navElement" component={Link} to="/shop" variant="h6" color="inherit" className='nav-links'>
                    Products
                </Typography>
                <Typography id = "navElement" component={Link} to="/about" variant="h6" color="inherit" className='nav-links'>
                    About us
                </Typography>
                <Typography id = "navElement"  component={Link} to="/contact" variant="h6" color="inherit" className='nav-links'>
                    Contact
                </Typography>
                <Typography id = "navElement"  component={Link} to="/thankyou" variant="h6" color="inherit" className='nav-links'>
                    Thank you
                </Typography>

                <div className={classes.grow} />
                {location.pathname === '/' || location.pathname === '/shop' || location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/thankyou' || location.pathname === '/product/prod_G6kVw73bKKw2eD' || location.pathname === '/product/prod_O3bR5XBbz1wnzd' ? (
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
