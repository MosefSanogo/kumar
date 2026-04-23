import { Check, Home } from "lucide-react";
import "../styles/PricingCard.css";

const PricingCard = ({ title }) => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="plan-row">
            <div className="plan-info">
                <div className="plan-icon-box">
                    <Home size={20} />
                </div>
                <h4 className="plan-type">{title}</h4>
            </div>

            <div className="plan-details">
                <div className="tech-badges">
                    <span className="badge">2D</span>
                    <span className="badge blue">3D</span>
                </div>
                <button
                    className="quote-btn"
                    onClick={() => scrollToSection('contact')}
                >
                    Consulter
                </button>
            </div>
        </div>
    );
};

export default PricingCard;