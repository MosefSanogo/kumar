import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import "./Services.css";
import { BarChart3, CurlyBraces, HardHat, Home } from "lucide-react";

const Services = () => {
  const services = [
  { 
    icon: Home, 
    title: "Conception de plans 2D", 
    description: "Réalisation de plans architecturaux précis pour tous types de logements." 
  },
  { 
    icon: CurlyBraces, 
    title: "Modélisation 3D", 
    description: "Visualisation réaliste de votre projet avant construction." 
  },
  { 
    icon: HardHat, 
    title: "Étude de projets", 
    description: "Analyse technique et optimisation de l'espace." 
  },
  { 
    icon: BarChart3, 
    title: "Suivi et conseils", 
    description: "Assistance pour la réalisation de vos projets." 
  },
];

  return (
    <div>
      <Header />
      <section className="services-page">
        <div className="container">
          <SectionTitle>Nos Services</SectionTitle>
          <div className="services-grid">
            {services.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;