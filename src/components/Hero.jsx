import Button from "./Button";
import "../styles/Hero.css";
import { Building, Building2, Home, HardHat, Ruler, Wrench, Hammer, Drill } from "lucide-react";

const Hero = ({ title, subtitle, description, button1Text, button1Link, button2Text, button2Link }) => {
    const scrollToSection = (hash) => {
        const sectionId = hash.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero">
            <div className="hero-container">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                <p className="hero-description">{description}</p>
                <div className="hero-buttons">
                    <Button onClick={() => scrollToSection(button1Link)}>{button1Text}</Button>
                    {button2Text && <Button onClick={() => scrollToSection(button2Link)} variant="secondary">{button2Text}</Button>}
                </div>
            </div>
            
            {/* Effet de buildings animés */}
            <div className="buildings">
                <Building className="building-icon" size={40} />
                <Building2 className="building-icon" size={45} />
                <Home className="building-icon" size={35} />
                <HardHat className="building-icon" size={40} />
                <Ruler className="building-icon" size={35} />
                <Building className="building-icon" size={50} />
                <Building2 className="building-icon" size={40} />
                <Wrench className="building-icon" size={35} />
                <Drill className="building-icon" size={45} />
                <Hammer className="building-icon" size={35} />
            </div>
            
            {/* Effet de poussière/construction */}
            <div className="construction-dust">
                <div className="dust dust-1"></div>
                <div className="dust dust-2"></div>
                <div className="dust dust-3"></div>
                <div className="dust dust-4"></div>
                <div className="dust dust-5"></div>
            </div>
        </div>
    );
};

export default Hero;