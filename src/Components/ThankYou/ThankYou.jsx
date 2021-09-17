import React from 'react'
import useStyles from './styles';


function ThankYou() {
    const classes = useStyles();

    return (
        <div>
            <head>
                <link rel="stylesheet" href="src\App.css" />
            </head>
            <div className={classes.toolbar} />
            <div id="titleBox">
                <h1>Thank You</h1>
            </div>
            <div id="freeTextBox">
                <p id="thanksmessage">We appreciate every visit to our store. We thank you graciously for your contribution to our cause. We will never stop doing what we do, and we can only do it with your support. We have a long road ahead of us, yet we hardy heads must trudge on. Godspeed, glorious instance of mankind. </p>
            </div>
            <p id="bottomtext"> ce n'est pas une vie à vivre sans difficulté </p>
        </div>
    )
}

export default ThankYou;
