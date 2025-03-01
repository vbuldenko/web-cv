import React from "react";
import "./footer.css"

export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Buldenko</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a 
                        href="https://www.instagram.com/walderwin/"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a
                        href="https://www.facebook.com/vladbuldenko/"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a
                        href="https://github.com/vbuldenko"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-github "></i>
                    </a>

                    <a
                        href="https://twitter.com/walderviron"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i class="bx bxl-twitter"></i>
                    </a>

                    <a
                        href="https://t.me/waldeviron"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i class='bx bxl-telegram'></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Buldenko. All rights reserved</span>
            </div>
        </footer>
    )
}