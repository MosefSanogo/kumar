import { Mail, Phone } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer grid-bg-dark ">
      <div className="footer-container">
        <div className="footer-section">
          <h3>KUMAR Construction</h3>
          <p>Conception de plans modernes & réalisation de projets sur mesure</p>
        </div>
        <div className="footer-section">
          <h4>Contact rapide</h4>
          <p style={{display:"flex",alignItems:"center", gap: 10}}><Mail size={24}/> <span>contact@kumar.com</span></p>
          <p style={{display:"flex",alignItems:"center", gap: 10}}><Phone size={24}/><span>+223 61 34 98 97</span></p>
        </div>
        <div className="footer-bottom">
          <p>&copy; Développé par Mohamed Sanogo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;