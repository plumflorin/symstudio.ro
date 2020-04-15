import React, { useState } from 'react'
import { Link } from "react-router-dom";
import AOS from "aos"

const AppNavbar = () => {

    const [menu, setMenu] = useState("");

    const togleMenu = () => {
        if (menu === "block") {
            setMenu("none")
        }

        else if (menu === "none") {
                setMenu("block")
        }
        else {
                setMenu("block")
            }
        }

        AOS.init({ duration : 1000});
    
        return (
            <div data-aos="fade-down" className="header">
                <div className="wrapper">
                    <div id="top-menu" style={{display: menu}}>
                        <a href="/" className="logo">Sym Studio</a>
                        <div className="menu-right">
                            <Link to="/">Home</Link>
                            <Link to="/servicii">Servicii</Link>
                            <a href="#contact">Contact</a>
                            <Link to="/test">Despre Noi</Link>
                        </div>                
                    </div>
                    <button id="hamburger" onClick={togleMenu}>
                        <i className="fa fa-bars fa-3x" aria-hidden="true"/>
                    </button>
                    
                    <div id="head-text-area">
                        <h2>Sym SPA & Beauty</h2>
                        <a href="/test">Programeaza-te acum</a>
                    </div>
                </div>
            </div>
        )
    }


export default AppNavbar

