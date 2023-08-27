import React from 'react';
import "./footer.css";

function Footer() {
    const recipientEmail = "readswap.contact@gmail.com";
    const subject = "Contact request";

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`;

    return (
        <footer>
            <div className="footer-container">
                <a className="footBut" id="contactButton" href={mailtoLink}>CONTACT</a>
            </div>
        </footer>
    );
}

export default Footer;
