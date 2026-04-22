import "../styles/Header.css";
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLogo, setShowLogo] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const navItems = [
        { name: "Accueil", sectionId: "hero" },
        { name: "Services", sectionId: "services" },
        { name: "Plans & Tarifs", sectionId: "plans" },
        { name: "Nos Projets", sectionId: "projets" },
        { name: "À propos", sectionId: "apropos" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 10);
            setShowLogo(offset > 450); // Fusion des deux logiques de scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""} ${showLogo ? "scrolled-logo": ""} ${isMenuOpen ? "header-open": ""}`}>
            <div className="header-container">
                <div
                    className={`logo ${scrolled ? "change" : ""} ${showLogo ? "change-logo": ""}`}
                    onClick={() => scrollToSection("hero")}
                >
                    {showLogo ? (
                        <img
                            src="/assets/logo.png"
                            alt="Kumar Construction Logo"
                            className="header-logo-img"
                        />)
                        :
                        <span className="logo-text" style={{color: isMenuOpen ? "#333" : ""}}>KUMAR</span>
                    }

                </div>

                <button
                    className={"hamburger" + (showLogo ? " change" : "")}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28}  color={isMenuOpen ? "#333" : ""}/> : <Menu size={28} />}
                </button>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''} ${showLogo ? 'nav-change' : ''}`}>
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