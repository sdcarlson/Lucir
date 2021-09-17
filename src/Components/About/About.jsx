import React from 'react';
import useStyles from './styles';
import BakerBeach from '../../assets/CompanyPhoto.jpg';
import palm from '../../assets/palm.png';
function About() {
    const classes = useStyles();
    const resolution = window.innerWidth;
    const isMobile = resolution >= 320 && resolution <= 480;
    let palm1Id = 'palm1';
    let companyPhotoId = 'companyphoto';
    let palm2Id = 'palm2';
    let textBoxId = 'textBox';
    let boxId = 'box';


    if (isMobile) {
        palm1Id = 'palm1-mobile';
        companyPhotoId = 'companyphoto-mobile';
        palm2Id = 'palm2-mobile';
        textBoxId = 'textBox-mobile';
        boxId = 'box-mobile'
    }


    return (
        <div>
            <div id={boxId}>
                <h1>We are Lucir</h1>
            </div>
            <div className="body-container">
                <div className={classes.toolbar} />
                <head>
                    <link rel="stylesheet" href="src\App.css" />
                </head>
                <div id='aboutImages'>
                    <img id={palm1Id} src={palm} className={classes.image} />
                    <img id={companyPhotoId} src={BakerBeach} className={classes.image} />
                    <img id={palm2Id} src={palm} className={classes.image} />
                </div>
                <div id="subtext">Photo taken at Baker Beach, San Francisco.</div>
                <div id='subtext'>Photographed are, from left to right, Amin Abdi (Brand Manager), Tristen Gann (Chemist), and Seth Carlson (Chief Software Engineer).</div>
                <div id={textBoxId}>
                    <p id="description">We at Lucir dream of a world in which we need not worry about the existential threat of global warming. We can see past the facade of now, and live for the breath of the future. We believe that overprocessing is a negative influence on our health as a society, and an enemy of the natural world. Human beings have accomplished much, but we have yet to accomplish truly clean living. We do not believe in the overengineered, unnatural, and completely synthetic compounds that make up everything we use today. We must never forget our origins; We must live in harmony with Mother Nature. We pledge to produce products with minimal processing and maximal quality, to assist the world toward a more breathable future. </p>
                </div>

            </div>
        </div>
    )
}

export default About;