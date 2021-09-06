import React from 'react'
import useStyles from './styles';
import lucir from '../../assets/lucir.png';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import VideoBackground from '../VideoBackground/VideoBackground';


const Home = () => {
    const classes = useStyles();
    const image = lucir;

    return (
        <div>
            {/*<div className={classes.toolbar} /> */}
            <VideoBackground />
            <div className="text" style={{ background: '#fff' }}>
                <img style={{ marginLeft: 300 }} src={image} alt="Link to store" />
            </div>

        </div>
    )
}

export default Home
