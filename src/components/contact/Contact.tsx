import React from "react";
import "./contact.css"

export default function Contact () {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">

                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bxl-gmail contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            {/* <span className="contact__card-data">vladbuldenko@gmail.com</span> */}
                            <a 
                                href="mailto:vladbuldenko@gmail.com"
                                className="contact__button"
                            >
                                Write me 
                                <i className="bx bx-right-arrow-alt
                                contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-telegram contact__card-icon"></i>
                            <h3 className="contact__card-title">Telegram</h3>
                            <a href="https://t.me/waldeviron" target="_blank" rel="noopener noreferrer" className="contact__button">Write me{""}<i className="bx bx-right-arrow-alt
                                contact__button-icon"></i></a>

                            {/* <span className="contact__card-data">999-888-77</span>
                            <a href="https://api.whatsapp.com/send?phone=62214408789&tex=Hello, more information!" className="contact__button">
                                Write me{""}
                                <i className="bx bx-right-arrow-alt
                                contact__button-icon"></i>
                            </a> */}
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-meta contact__card-icon"></i>
                            <h3 className="contact__card-title">Facebook</h3>
                            
                            <a href="https://www.facebook.com/vladbuldenko/" target="_blank" className="contact__button">
                                Write me{""}
                                <i className="bx bx-right-arrow-alt
                                contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your proposal</h3>

                    <form className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input 
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Mail</label>
                            <input 
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Proposal</label>
                            <textarea
                                name="proposal"
                                id=""
                                className="contact__form-input"
                                placeholder="Describe your project"
                                cols="30"
                                rows="10"
                            />
                        </div>
                        
                        <button className="button button--flex">
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}