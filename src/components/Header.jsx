import "../styles/Header.css";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Ferme le menu après le clic
    }
  };

  const navItems = [
    { name: "Accueil", sectionId: "hero" },
    { name: "Services", sectionId: "services" },
    { name: "Plans & Tarifs", sectionId: "plans" },
    { name: "Nos Projets", sectionId: "projets" },
    { name: "À propos", sectionId: "apropos" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection("hero")}>
          <img src="public\assets\logo.png" alt="Portrait" style={{width:"70px",height:"50px"}}/>
        </div>
        
        {/* Bouton hamburger (visible sur mobile) */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation (responsive) */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item, index) => (
            <button
              key={index}
              className="nav-link"
              onClick={() => scrollToSection(item.sectionId)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;