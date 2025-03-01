import React from "react"
import "./portfolio.css"

export default function Portfolio(){
    return(
        <section className="section" id="portfolio">
            <h2 className="section__title">
                Portfolio
            </h2>
            <span className="section__subtitle">
                List of my projects
            </span>

            <div className="portfolio__container container grid">
                
                <div className="portfolio__content">
                    <div>
                        <img 
                            src="#"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="services__title">Movie Watchlist</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModalTab(1)}>
                        View Details
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    {/* <div className={modalState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleModalTab(0)}></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>
                            <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>

                <div className="portfolio__content">
                    <div>
                        <img 
                            src="#"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="services__title">Movie Watchlist</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModalTab(1)}>
                        View Details
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>

                <div className="portfolio__content">
                    <div>
                        <img 
                            src="#"
                            alt=""
                            className="portfolio__img"
                        />
                        <h3 className="services__title">Movie Watchlist</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModalTab(1)}>
                        View Details
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>
            </div>

        </section>
    )
}