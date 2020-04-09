import React, { useState } from 'react'

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
    
        return (
            <div className="header">
                <div className="wrapper">
                    <div id="top-menu" style={{display: menu}}>
                        <a href="/" className="logo">Sym Studio</a>
                        <div className="menu-right">
                            <a href="/">Home</a>
                            <a href="/test">Servicii</a>
                            <a href="/test">Tarife</a>
                            <a href="/test">Contact</a>
                            <a href="/test">Despre Noi</a>
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

