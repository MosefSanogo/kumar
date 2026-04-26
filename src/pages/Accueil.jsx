import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import PricingCard from "../components/PricingCard";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { Ruler, Box, Wallet, Users, Home, HardHat, BarChart3, Cuboid, Building2, Phone, Mail, Building } from 'lucide-react';
import "./Accueil.css";
import { useState } from "react";
import { di, plans, st, visuels } from "../data/data";

const Accueil = () => {
    const [active, setActive] = useState(1)

    // Données des services
    const services = [
        { Icon: Home, title: "Conception de plans 2D", description: "Réalisation de plans architecturaux précis pour tous types de logements." },
        { Icon: Cuboid, title: "Modélisation 3D & Desin intérieur", description: "Visualisation réaliste de votre projet avant construction." },
        { Icon: HardHat, title: "Étude de projets", description: "Analyse technique et optimisation de l'espace." },
        { Icon: BarChart3, title: "Suivi et conseils", description: "Assistance pour la réalisation de vos projets." },
    ];



    return (
        <div>
            <Header />

            {/* Section HERO */}
            <section id="hero">
                <Hero
                    title="KUMAR Construction"
                    subtitle=""
                    description="KUMAR Construction vous accompagne dans la conception, l'étude et la réalisation de vos projets de construction, de l’idée initiale jusqu’au chantier."
                    button1Text="Voir nos projets"
                    button1Link="#projets"
                />
            </section>

            {/* Section Présentation */}
            <section className="presentation">
                <div className="container">
                    <SectionTitle>Qui sommes-nous ?</SectionTitle>
                    <p className="presentation-text">
                        Notre objectif est simple : transformer vos idées en projets concrets, fiables et optimisés.
                        Grâce à une maîtrise technique et une vision globale du génie civil, nous assurons des solutions adaptées à chaque besoin, que vous soyez particulier, promoteur ou professionnel.
                    </p>
                </div>
            </section>

            {/* Section Points forts
            <section className="points-forts">
                <div className="container">
                    <SectionTitle>Nos points forts</SectionTitle>
                    <div className="points-forts-grid">
                        {pointsForts.map((point, index) => (
                            <Card
                                key={index}
                                icon={point.Icon}
                                title={point.title}
                                description={point.description}
                            />
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Section SERVICES */}
            <section id="services" className="services-section grid-bg">
                <div className="container">
                    <SectionTitle>Nos Services</SectionTitle>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                icon={service.Icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section PLANS & TARIFS 
            <section id="plans" className="plans-section">
                <div className="container">
                    <SectionTitle>Nos Solutions de Conception</SectionTitle>
                    <p className="section-subtitle">Sélectionnez le type de projet pour obtenir une étude personnalisée.</p>

                    <div className="plans-list-container">
                        {/* En-tête informatif 
                        <div className="plans-header-row">
                            <span>Configurations disponibles</span>
                            <div className="capabilities-label">
                                <span>Livrables</span>
                            </div>
                        </div>

                        {/* Liste des prestations 
                        {
                            allPlans.map((plan) => (
                                <PricingCard
                                    key={plan.id}
                                    title={plan.title}
                                    has2D={!plan.has2D}
                                    has3D={plan.has3D}
                                />
                            ))
                        }
                    </div>

                    {/* Section Options (Niveaux de construction) 
                    <div className="options-section">
                        <h3 className="category-title" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
                            <HardHat size={28} style={{ display: 'inline', marginRight: '8px' }} />
                            Options supplémentaires
                        </h3>
                        <div className="options-grid">
                            {options.map((option, index) => (
                                <div key={index} className="option-card">
                                    <span className="option-level">{option.level}</span>
                                    <span className="option-label">{option.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="disclaimer">
                        <p>Chaque projet d'ingénierie est unique. Contactez-nous pour un devis sur-mesure.</p>
                    </div>
                </div>
            </section>
            */}

            {/* Section PROJETS */}
            <section id="projets" className="projets-section">
                <div className="container">
                    <SectionTitle>Nos Projets</SectionTitle>
                    <div className="tab">
                        <Button
                            variant={active === 1 ? "primary" : "secondary"}
                            title={"Plans"}
                            onClick={() => setActive(1)}>
                            2D
                        </Button>
                        <Button
                            variant={active === 2 ? "primary" : "secondary"}
                            title={"Visuel 3D"}
                            onClick={() => setActive(2)}
                        >
                            3D
                        </Button>
                        <Button
                            variant={active === 3 ? "primary" : "secondary"}
                            title={"Design intérieur"}
                            onClick={() => setActive(3)}
                        >
                            DI
                        </Button>
                        <Button
                            variant={active === 4 ? "primary" : "secondary"}
                            title={"Structure"}
                            onClick={() => setActive(4)}
                        >
                            ST
                        </Button>
                    </div>
                    <div className="projets-grid">
                        { active === 1 && plans.map((projet, index) => (
                            <ProjectCard
                                key={index}
                                title={projet.title}
                                description={projet.description}
                                imageUrl={projet.imageUrl}
                            />
                        ))}
                        { active === 2 && visuels.map((projet, index) => (
                            <ProjectCard
                                key={index}
                                title={projet.title}
                                description={projet.description}
                                imageUrl={projet.imageUrl}
                            />
                        ))}
                        { active === 3 && di.map((projet, index) => (
                            <ProjectCard
                                key={index}
                                title={projet.title}
                                description={projet.description}
                                imageUrl={projet.imageUrl}
                            />
                        ))}
                        { active === 4 && st.map((projet, index) => (
                            <ProjectCard
                                key={index}
                                title={projet.title}
                                description={projet.description}
                                imageUrl={projet.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section À PROPOS 
            <section id="apropos" className="apropos-section">
                <div className="container">
                    <SectionTitle>À propos de nous</SectionTitle>
                    <div className="apropos-content">
                        <p className="apropos-text">
                            KUMAR Construction est une entreprise spécialisée dans la conception de plans architecturaux modernes.
                            Nous mettons notre expertise au service de vos projets pour garantir qualité, précision et satisfaction.
                        </p>
                        <div className="apropos-values">
                            <div className="value-item">
                                <h3>🎯 Notre mission</h3>
                                <p>Transformer vos idées en espaces fonctionnels et esthétiques.</p>
                            </div>
                            <div className="value-item">
                                <h3>💡 Notre expertise</h3>
                                <p>Plusieurs années d'expérience en conception 2D et 3D.</p>
                            </div>
                            <div className="value-item">
                                <h3>🤝 Notre engagement</h3>
                                <p>Un accompagnement personnalisé à chaque étape de votre projet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}

            {/* Section CONTACT */}
            <section id="contact" className="contact-section">
                <div className="container">
                    <SectionTitle>Contactez-nous</SectionTitle>

                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Nos coordonnées</h3>
                            <div className="info-item">
                                <span className="info-icon"><Mail size={24} /> </span>
                                <p>kumar.construction45@gmail.com</p>
                            </div>
                            <div className="info-item">
                                <span className="info-icon"><Phone size={24} /> </span>
                                <p>+223 61 34 98 97</p>
                            </div>
                            <div className="info-item">
                                <span className="info-icon"><Phone size={24} /> </span>
                                <p>+223 70 06 40 23</p>
                            </div>
                            <div className="info-item">
                                <span className="info-icon"><Phone size={24} /> </span>
                                <p>+33 7 45 52 32 64</p>
                            </div>
                            <p className="contact-text">
                                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Accueil;