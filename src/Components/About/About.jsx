import React from 'react'
import useStyles from './styles';


function About() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <h1>About</h1>
        </div>
    )
}

export default About;
