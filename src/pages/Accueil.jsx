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

const Accueil = () => {
    // Données des points forts
    const pointsForts = [
        { Icon: Ruler, title: "Plans modernes et optimisés", description: "Design contemporain et fonctionnel" },
        { Icon: Box, title: "Modélisation 3D réaliste", description: "Visualisation avant construction" },
        { Icon: Wallet, title: "Tarifs accessibles", description: "Qualité au meilleur prix" },
        { Icon: Users, title: "Accompagnement personnalisé", description: "Suivi de A à Z" },
    ];

    // Données des services
    const services = [
        { Icon: Home, title: "Conception de plans 2D", description: "Réalisation de plans architecturaux précis pour tous types de logements." },
        { Icon: Cuboid, title: "Modélisation 3D", description: "Visualisation réaliste de votre projet avant construction." },
        { Icon: HardHat, title: "Étude de projets", description: "Analyse technique et optimisation de l'espace." },
        { Icon: BarChart3, title: "Suivi et conseils", description: "Assistance pour la réalisation de vos projets." },
    ];

    // Données des plans 2D
    const allPlans = [
        {
            id: 1,
            title: "F1 (Studio)",
            has2D: true,
            has3D: true,
            description: "Idéal pour investissement locatif ou petite dépendance."
        },
        {
            id: 2,
            title: "F2 (1 chambre)",
            has2D: true,
            has3D: true,
            description: "Plan optimisé pour couple ou personne seule."
        },
        {
            id: 3,
            title: "F3 (2 chambres)",
            has2D: true,
            has3D: true,
            description: "Maison familiale standard avec séjour spacieux."
        },
        {
            id: 4,
            title: "F4 (3 chambres)",
            has2D: true,
            has3D: true,
            description: "Conception spacieuse avec suite parentale."
        },
        {
            id: 5,
            title: "F5 (Villa)",
            has2D: true,
            has3D: true,
            description: "Grande villa avec garage et prestations haut de gamme."
        }
    ];


    // Options supplémentaires
    const options = [
        { id: 'r1', level: "R+1", label: "Un étage" },
        { id: 'r2', level: "R+2", label: "Deux étages" },
        { id: 'r3', level: "R+3", label: "Trois étages" }
    ];

    // Projets
    const projets = [
        {
            title: "Maison moderne F3",
            description: "Plan 2D + rendu 3D - Une maison familiale alliant modernité et fonctionnalité.",
            imageUrl: "https://th.bing.com/th/id/R.c835f327306977e2d1f4d9f793fd4ac5?rik=yb8VPuVtt55s3A&pid=ImgRaw&r=0"
        },
        {
            title: "Villa contemporaine F5",
            description: "Design moderne avec étage - Villa spacieuse aux lignes épurées.",
            imageUrl: "https://th.bing.com/th/id/R.3e4a5e26bd38d9aeeb14576d76fcf5c2?rik=tM1cCgBotrqwUw&pid=ImgRaw&r=0"
        },
        {
            title: "Projet personnel sur mesure",
            description: "Illustration de notre savoir-faire en conception architecturale et modélisation 3D.",
            imageUrl: "https://www.bati-solar.fr/wp-content/uploads/2018/10/telecharger-logiciel-pour-meilleur-construire-sa-maison-en-3d-gratuit-.jpg"
        },
    ];


    return (
        <div>
            <Header />

            {/* Section HERO */}
            <section id="hero">
                <Hero
                    title="KUMAR Construction"
                    subtitle="Conception de plans modernes & réalisation de projets sur mesure"
                    description="KUMAR Construction est spécialisée dans la conception de plans architecturaux 2D et 3D, adaptés aux besoins des particuliers et des professionnels. Nous transformons vos idées en projets concrets, modernes et fonctionnels."
                    button1Text="Voir nos plans"
                    button1Link="#plans"
                />
            </section>

            {/* Section Présentation */}
            <section className="presentation">
                <div className="container">
                    <SectionTitle>Qui sommes-nous ?</SectionTitle>
                    <p className="presentation-text">
                        Nous proposons des solutions complètes allant du simple plan 2D à la modélisation 3D avancée,
                        avec des options adaptées à tous types de projets (F1 à F5, R+1 à R+3).
                    </p>
                </div>
            </section>

            {/* Section Points forts */}
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
            </section>

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

            {/* Section PLANS & TARIFS */}
            <section id="plans" className="plans-section">
                <div className="container">
                    <SectionTitle>Nos Solutions de Conception</SectionTitle>
                    <p className="section-subtitle">Sélectionnez le type de projet pour obtenir une étude personnalisée.</p>

                    <div className="plans-list-container">
                        {/* En-tête informatif */}
                        <div className="plans-header-row">
                            <span>Configurations disponibles</span>
                            <div className="capabilities-label">
                                <span>Livrables</span>
                            </div>
                        </div>

                        {/* Liste des prestations */}
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

                    {/* Section Options (Niveaux de construction) */}
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

            {/* Section PROJETS */}
            <section id="projets" className="projets-section">
                <div className="container">
                    <SectionTitle>Nos Réalisations</SectionTitle>
                    <div className="projets-grid">
                        {projets.map((projet, index) => (
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

            {/* Section À PROPOS */}
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
            </section>

            {/* Section CONTACT */}
            <section id="contact" className="contact-section">
                <div className="container">
                    <SectionTitle>Contactez-nous</SectionTitle>

                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Nos coordonnées</h3>
                            <div className="info-item">
                                <span className="info-icon"><Mail size={24} /> </span>
                                <p>contact@kumar.com</p>
                            </div>
                            <div className="info-item">
                                <span className="info-icon"><Phone size={24} /> </span>
                                <p>+223 61 34 98 97</p>
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