import React from 'react';
import useStyles from './styles';
import BakerBeach from '../../assets/CompanyPhoto.jpg';
import palm from '../../assets/palm.png';
function About() {
    const classes = useStyles();
    let isMobile = ((window.screen.width) < 420);
    if (isMobile)
    {
        return(
        <div>
            <head>
                        <link rel="stylesheet" href="src\App.css" />
                    </head>
                    <br>
                    </br>
                <div id="box">
                    <h1>We are Lucir</h1>
                </div>
               
                    
                    
                    <img id='companyphoto-mobile' src={BakerBeach} className={classes.image} />
                    <div id="subtext">Photo taken at Baker Beach, San Francisco.</div>
                    <div id='subtext'>Photographed are, from left to right, Brand Manager Amin Abdi, Chemist Tristen Gann, Chief Software Engineer Seth Carlson.</div>
                    <div id="freeTextBox">
                    <p id="description">We at Lucir dream of a world in which we need not worry about the existential threat of global warming. We can see past the facade of now, and live for the breath of the future. We believe that overprocessing is a negative influence on our health as a society, and an enemy of the natural world. Human beings have accomplished much, but we have yet to accomplish truly clean living. We do not believe in the overengineered, unnatural, and completely synthetic compounds that make up everything we use today. We must never forget our origins; We must live in harmony with Mother Nature. We pledge to produce products with minimal processing and maximal quality, to assist the world toward a more breathable future. </p>

                </div>
            </div>
        )
    }


    else 
    {
        return (
            <div>
                <div id="box">
                    <h1>We are Lucir</h1>
                </div>
                <div className="body-container">
                    <div className={classes.toolbar} />
                    <head>
                        <link rel="stylesheet" href="src\App.css" />
                    </head>
                    <div id='aboutImages'>
                        <img id='palm1' src={palm} className={classes.image} />
                        <img id='companyphoto' src={BakerBeach} className={classes.image} />
                        <img id='palm2' src={palm} className={classes.image} />
                    </div>
                    <div id="subtext">Photo taken at Baker Beach, San Francisco.</div>
                    <div id='subtext'>Photographed are, from left to right, Amin Abdi (Brand Manager), Tristen Gann (Chemist), and Seth Carlson (Chief Software Engineer).</div>
                    <div id="textBox">
                        <p id="description">We at Lucir dream of a world in which we need not worry about the existential threat of global warming. We can see past the facade of now, and live for the breath of the future. We believe that overprocessing is a negative influence on our health as a society, and an enemy of the natural world. Human beings have accomplished much, but we have yet to accomplish truly clean living. We do not believe in the overengineered, unnatural, and completely synthetic compounds that make up everything we use today. We must never forget our origins; We must live in harmony with Mother Nature. We pledge to produce products with minimal processing and maximal quality, to assist the world toward a more breathable future. </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;