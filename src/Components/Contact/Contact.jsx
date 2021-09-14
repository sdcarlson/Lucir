import React from 'react'
import useStyles from './styles';


function Contact() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <h1>Contact</h1>
            <p id = "contact">You can email us at <a href="mailTo:lucirsoap@gmail.com?subject=feedback" id="contact">lucirsoap@gmail.com</a></p>
            <p id ="contact">Our <a href='https://www.twitter.com/lucirsoap/' target="_blank" rel="noopener noreferrer" id="contact">Twitter</a></p>
            <p id = "contact">Our <a href='https://www.Instagram.com/lucirsoap/' target="_blank" rel="noopener noreferrer" id="contact">Instagram</a></p>
                    </div>
    )
}

export default Contact;
