import React from "react";
import {NavLink, Outlet} from "react-router-dom";

const setClass = ({isActive}) => isActive ? "active-link": "link";

export default function Layout (props){
    return(
        <>
            <header>
                <nav className="navigation">
                    <NavLink to="/" className={setClass}>Home</NavLink>
                    <NavLink to="/portfolio" className={setClass}>Portfolio</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                Copyright 2022. All Rights Reserved
            </footer>
        </>
    )
}