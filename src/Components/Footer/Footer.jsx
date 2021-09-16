import React from 'react';

import './Footer.css';

const Footer = ({ isLongPage }) => {

    if (isLongPage) {
        return (
            <div className="wrapper">
                <section className="footer-longpage">
                    <hr className="footer-seperator" />
                    <section className="footer-social-media">
                        <a href="/" target="_blank" rel="noopener noreferrer">Lucir</a>
                    </section>
                    <section className="footer-info">
                        <section className="footer-info-left">
                            <section className="footer-info__name">
                                lucirsoap@gmail.com
                            </section>
                            <section className="footer-info__returns">
                                site design / logo © 2021 Lucir Inc
                            </section>
                        </section>
                        <section className="footer-info-center">
                            <section className="footer-info__email">
                                "Ce n'est pas une vie a vivre sans difficulté"
                            </section>
                            <section className="footer-info__terms">

                            </section>
                        </section>
                        <section className="footer-info-right">
                            <section className="footer-info__number">
                                Follow us on:
                            </section>
                            <section className="footer-info__contact">
                                <a href="https://twitter.com/lucirsoap/" target="_blank" rel="noopener noreferrer">Twitter</a>
                                <br />
                                <a href="https://www.instagram.com/lucirsoap/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </section>
                        </section>
                    </section>
                    <hr className="footer-seperator" />
                </section>
            </div>
        )
    } else {
        return (
            <div className="wrapper">
                <section className="footer-shortpage">
                    <hr className="footer-seperator" />
                    <section className="footer-social-media">
                        <a href="/" target="_blank" rel="noopener noreferrer">Lucir</a>
                    </section>
                    <section className="footer-info">
                        <section className="footer-info-left">
                            <section className="footer-info__name">
                                lucirsoap@gmail.com
                            </section>
                            <section className="footer-info__returns">
                                site design / logo © 2021 Lucir Inc
                            </section>
                        </section>
                        <section className="footer-info-center">
                            <section className="footer-info__email">
                                "Ce n'est pas une vie a vivre sans difficulté"
                            </section>
                            <section className="footer-info__terms">

                            </section>
                        </section>
                        <section className="footer-info-right">
                            <section className="footer-info__number">
                                Follow us on:
                            </section>
                            <section className="footer-info__contact">
                                <a href="https://twitter.com/lucirsoap/" target="_blank" rel="noopener noreferrer">Twitter</a>
                                <br />
                                <a href="https://www.instagram.com/lucirsoap/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </section>
                        </section>
                    </section>
                    <hr className="footer-seperator" />
                </section>
            </div>
        )
    }
}

export default Footer;