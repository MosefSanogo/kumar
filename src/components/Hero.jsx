import Button from "./Button";
import "../styles/Hero.css";
import { 
    Building, Building2, Home, HardHat, 
    Ruler, Wrench, Hammer, Drill, Layers 
} from "lucide-react";

const Hero = ({ title, subtitle, description, button1Text, button1Link, button2Text, button2Link }) => {
    
    // Liste des icônes pour la boucle
    const icons = [
        { Icon: Building, size: 40 },
        { Icon: Building2, size: 45 },
        { Icon: Home, size: 35 },
        { Icon: HardHat, size: 40 },
        { Icon: Ruler, size: 35 },
        { Icon: Layers, size: 50 }, // Ajout d'une icône de strates/plans
        { Icon: Building, size: 40 },
        { Icon: Wrench, size: 35 },
        { Icon: Drill, size: 45 },
        { Icon: Hammer, size: 35 }
    ];

    const scrollToSection = (hash) => {
        const sectionId = hash.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-container">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                <p className="hero-description">{description}</p>
                <div className="hero-buttons">
                    <Button onClick={() => scrollToSection(button1Link)}>
                        {button1Text}
                    </Button>
                    {button2Text && (
                        <Button 
                            onClick={() => scrollToSection(button2Link)} 
                            variant="secondary"
                        >
                            {button2Text}
                        </Button>
                    )}
                </div>
            </div>
            
            {/* Décoration : Buildings */}
            <div className="buildings" aria-hidden="true">
                {icons.map(({ Icon, size }, index) => (
                    <Icon 
                        key={index} 
                        className="building-icon" 
                        size={size} 
                        strokeWidth={1.5} // Traits plus fins pour un look plus "dessin technique"
                    />
                ))}
            </div>
            
            {/* Décoration : Particules de poussière */}
            <div className="construction-dust" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={`dust dust-${i + 1}`}></div>
                ))}
            </div>
        </section>
    );
};

export default Hero;