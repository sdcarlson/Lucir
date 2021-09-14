import React from 'react';
//mport 'App.css';
//mport { Button } from './Button';
import { Button } from '@material-ui/core';
import './HeroSection.css';
import video from '../../assets/waves.mp4'
import { Link, useLocation } from 'react-router-dom';
import lucir from '../../assets/lucir.png';



function VideoBackground() {
    const image = lucir;
    return (
        <div>
            <head>
                <link rel="stylesheet" href="src\App.css"/>
            </head>
            <div className='hero-container'>   
                <video src={video} autoPlay loop muted />
                <span id="welcomeTo">Presenting </span><img id="lucir" src={image} alt="Link to store" />
                <Button component={Link} to="/shop" className='btn' variant="contained" color='mintgreen' style={{ marginTop: '60px', maxWidth: '130px', maxHeight: '60px', minWidth: '130px', minHeight: '50px' }} >
                    See Products
                </Button>
                <div id = "introD">
                <p id="intro">You have found the cleanest soap store on the internet. We pledge minimal processing, with maximal quality. To do this, we choose less processed ingredients, design immaculate formulations, and hand-make every batch of soap. With keen eyes for quality, and a sense of entrepreneurial duty, we aim to reduce energy waste in this world. The pale blue dot we call home, Earth, must be diligently protected -- Lucir strives for a clean body, mind, and soul.</p>
                </div>
            </div>
        </div>
    );
}

export default VideoBackground;
