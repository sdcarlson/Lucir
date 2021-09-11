import React from 'react'
import useStyles from './styles';


function Contact() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar} />
            <h1>Contact</h1>
            <a href="mailTo:lucirsoap@gmail.com?subject=feedback" id="contact">You can email us at lucirsoap@gmail.com</a>
            <a href='https://www.twitter.com/lucirsoap/' target="_blank" rel="noopener noreferrer" id="contact"> Our Twitter handle</a>
            <a  href='https://www.Instagram.com/lucirsoap/' target="_blank" rel="noopener noreferrer" id="contact"> Our Instagram handle</a>
                    </div>
    )
}

export default Contact;
