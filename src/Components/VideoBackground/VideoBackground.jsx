import React from 'react';
//mport '../App.css';
//mport { Button } from './Button';
import { Button } from '@material-ui/core';
import './HeroSection.css';
import video from '../../assets/waves.mp4'
import { Link, useLocation } from 'react-router-dom';


function VideoBackground() {
    return (
        <div>
            <div className='hero-container'>
                <video src={video} autoPlay loop muted />
                <h1>WELCOME TO LUCIR</h1>
                <p>What are you waiting for?</p>
                <Button component={Link} to="/shop" className='btn' variant="contained" color="secondary" style={{ maxWidth: '130px', maxHeight: '70px', minWidth: '130px', minHeight: '70px' }} >
                    Shop Now
                </Button>
            </div>

        </div>
    );
}

export default VideoBackground;
