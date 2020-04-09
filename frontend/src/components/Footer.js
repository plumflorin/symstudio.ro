import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="contact">
                <h3>Contact</h3>
                <p>Adresa: Bulevard Tomis nr. 222 bl ST12 900497 Constanța</p>
                <p>Telefon: 0722222222</p>
                <p>email: vulturu@blabla.ro</p>
                <a href="http://www.facebook.com/xxx" target="_blank" className="symbol-facebook"><img src="img/Facebook-color.svg" alt=""></img></a>
                <a href="http://www.instagram.com/xxx" target="_blank" className="symbol-facebook"><img src="img/Instagram-color.svg" alt=""></img></a>
            </div>
            <div className="contact">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2701.1528456494143!2d28.609059640606958!3d44.170567011549664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c746adda9934fcb!2sCora%20Br%C4%83tianu!5e0!3m2!1sro!2sro!4v1572687728512!5m2!1sro!2sro"  frameBorder="0" style={{border: "0", allowfullscreen:""}}></iframe>
            </div>
            <div className="copyright">
                <p>© Copyright: Vulturu Beauty and Spa</p>
            </div>
            <div className="copyright">
                <p>Made by © <a href="www.plumdesign.ro" target="_blank">plumdesign.ro</a></p>
            </div>
        </footer>
    )
}

export default Footer
