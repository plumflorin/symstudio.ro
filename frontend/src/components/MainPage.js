import React from 'react'
import AOS from "aos"


const MainPage = () => {

    AOS.init({ duration : 1000});

    return (
        <>
            <div data-aos="zoom-in" className="middle wrapper-wide">
                <div className="left">
                    <div className="skewback">
                        <div className="center">
                            <h2>Salon Beauty</h2>
                            <a href="/test">Vezi mai mult</a>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="skewback">
                        <div className="center">
                            <h2>Salon Spa</h2>
                            <a href="/test">Vezi mai mult</a>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="contact-area">
                <div className="contact-text-area">
                    <i className="material-icons md-inactive">near_me</i>
                    <p>Adresa: Bulevard Tomis nr. 222 bl ST12 900497 Constanța</p>
                </div>
                <div className="contact-text-area">
                    <i className="material-icons md-inactive">phone</i>
                    <p>Telefon: 0722222222</p>
                </div>
                <div className="contact-text-area">
                <i className="material-icons  md-inactive">watch_later</i>
                    <table>
                        <tbody>
                            <tr>
                                <td>Program:</td>
                            </tr>
                            <tr>
                                <td>Luni - Vineri: 09 - 18</td>
                            </tr>
                            <tr>
                                <td>Sambata: 09 - 13</td>
                            </tr>
                            <tr>
                                <td>Duminica: Inchis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="despre">
                <div data-aos="fade-right" className="despre__text">
                    <h3>Sym Studio Salon Constanta</h3>
                    <p>Frumusețea exterioară se îmbină cu cea interioară.

                        Fie că doriți să mențineti linia sau doriți o transformare completă, vom asculta cu atenție si ne vom
                        folosi intuiția și experiența pentru a crea un aspect care să vă reprezinte.

                        Suntem parteneri cu cele mai bune branduri din cadrul industriei: L’Oréal Professional,Topline ,Cupio,
                        Bruno Vassari.

                        Apollo se mândrește cu o echipă de profesioniști care sunt întotdeauna bucuroși să vă ofere sfaturi și
                        să vă recomande produse de îngrijire.</p>
                </div>
                <div data-aos="fade-left" className="despre__imagine">
                    <div className="despre__img-wrap">
                        <img src="img/1.jpg" alt=""></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
