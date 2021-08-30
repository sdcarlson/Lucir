import React from 'react'
import useStyles from './styles';
import lucir from '../../assets/lucir.png';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';


const Home = () => {
    const classes = useStyles();
    const image = lucir;

    return (
        <div>
            <div className={classes.toolbar} />
            <Typography component={Link} to="/shop" >
                <img src={image} alt="Link to store" />
            </Typography>
        </div>
    )
}

export default Home
