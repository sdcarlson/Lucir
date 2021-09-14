import React from 'react';
import useStyles from './styles';
import BakerBeach from '../../assets/CompanyPhoto.jpg';
import palm from '../../assets/palm.png';
function About() {
    const classes = useStyles();

    return (
            <div className="body-container">
            
            <div className={classes.toolbar} />
            <head>
                <link rel="stylesheet" href="src\App.css"/>
            </head>
            <div id="box">
            <h1>We are Lucir</h1>
            </div>
            <div id='aboutImages'> 
                    <img id='palm1' src={palm} className={classes.image}/> 
                    <img id='companyphoto' src={BakerBeach} className={classes.image} />
                    <img id='palm2' src={palm} className={classes.image}/>
            </div>
            <div id="subtext">Photo taken at Baker Beach, San Francisco.</div>
            <div id='subtext'>Photographed are, from left to right, Amin Abdi (Brand Manager), Tristen Gann (Chemist), Seth Carlson (Chief Software Engineer).</div>
            <div id="textBox">
                <p id="description">We at Lucir dream of a world in which we need not worry about the existential threat of global warming. We can see past the facade of now, and live for the breath of the future. We believe that overprocessing is a negative influence on our health as a society, and an enemy of the natural world. Human beings have accomplished much, but we have yet to accomplish truly clean living. We do not believe in the overengineered, unnatural, and completely synthetic compounds that make up everything we use today. We must never forget our origins; We must live in harmony with Mother Nature. We pledge to produce products with minimal processing and maximal quality, to assist the world toward a more breathable future. </p>
            </div>
            <p id ="bottomtext"> ce n'est pas une vie à vivre sans difficulté </p>
            </div>  
    )
}

export default About;