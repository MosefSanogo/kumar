import { Mail, Phone } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img
              src="assets/logo1.png"
              alt="Kumar Construction Logo"
              className="header-logo-img1"
            />
          </div>
          <p>Transformer vos visions en réalité</p>
        </div>
        <div className="footer-section">
          <h4>Contact rapide</h4>
          <p style={{ display: "flex", alignItems: "center", gap: 10 }}><Mail size={24} /> <span>kumar.construction45@gmail.com</span></p>
          <p style={{ display: "flex", alignItems: "center", gap: 10 }}><Phone size={24} /><span>+223 61 34 98 97</span></p>
          <p style={{ display: "flex", alignItems: "center", gap: 10 }}><Phone size={24} /><span>+223 70 06 40 23</span></p>
          <p style={{ display: "flex", alignItems: "center", gap: 10 }}><Phone size={24} /><span>+33 7 45 52 32 64</span></p>
        </div>
        <div className="footer-bottom">
          <p>&copy; Kumar-Construction. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;