import{FaFacebookSquare} from "react-icons/fa";
import{FaTwitterSquare} from "react-icons/fa";
import{FaInstagramSquare} from "react-icons/fa";
import "./footer.css";


function Footer() {

  const recipientEmail = "readswap.contact@gmail.com";
  const subject = "Contact request";

  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`;

    return(
        
        <div className="Footerbar">
          <footer >

          <div>
                <a className="Contact"  href={mailtoLink}>CONTACT US </a>
          </div>
          <div className="media-icons">
            <FaFacebookSquare id="facebook"  alt="Facebook"/>
            <FaTwitterSquare id="twitter" alt="Twitter"/>
            <FaInstagramSquare id="Instagram" alt="Instagram"/>
          </div>
          <div classnName="below">
            <h6 className="Copyright">All rights are reserved</h6>
          </div> 

          </footer> 
        </div>
        
       

    );     
}

export default Footer;
