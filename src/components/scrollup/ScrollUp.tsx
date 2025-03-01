import React from "react";
import "./scrollup.css"

export default function ScrollUp () {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup")

        // when the scroll is higher than 560vh add the show class
        if (this.scrollY >= 560){
            scrollUp.classList.add("display-scroll")
        }
        else {
            scrollUp.classList.remove("display-scroll")
        }
    })

    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}