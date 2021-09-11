import React from 'react'
import useStyles from './styles';


function ThankYou() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <h1>Thank You</h1>
            <p id="thanksmessage">We appreciate every visit to our store. We thank you graciously for your contribution to our cause. We will never stop doing what we do, and we can only do it with your support. We have a long road ahead of us, yet we hardy heads must trudge on. Godspeed, glorious instance of mankind. </p>
            <p id ="bottomtext"> ce n'est pas une vie à vivre sans difficulté </p>
        </div>
    )
}

export default ThankYou;
