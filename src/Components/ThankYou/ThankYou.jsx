import React from 'react'
import useStyles from './styles';


function ThankYou() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <h1>Thank You</h1>
        </div>
    )
}

export default ThankYou;
