import React from 'react'
import useStyles from './styles';


function Contact() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <h1>Contact</h1>
        </div>
    )
}

export default Contact;
