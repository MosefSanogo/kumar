import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import PricingCard from "../components/PricingCard";
import "./PlansTarifs.css";

const PlansTarifs = () => {
  const plans2D = [
    { title: "F1 (Studio)", price: "100€" },
    { title: "F2 (1 chambre)", price: "150€" },
    { title: "F3 (2 chambres)", price: "200€" },
    { title: "F4 (3 chambres)", price: "300€" },
    { title: "F5 (Villa)", price: "400€" },
  ];

  const plans3D = [
    { title: "F1 3D", price: "200€", is3D: true },
    { title: "F2 3D", price: "300€", is3D: true },
    { title: "F3 3D", price: "400€", is3D: true },
    { title: "F4 3D", price: "600€", is3D: true },
    { title: "F5 3D", price: "800€+", is3D: true },
  ];

  const options = [
    { level: "R+1", price: "+100€" },
    { level: "R+2", price: "+200€" },
    { level: "R+3", price: "+300€" },
  ];

  return (
    <div>
      <Header />
      <section className="plans-page">
        <div className="container">
          <SectionTitle>Nos Plans et Tarifs</SectionTitle>
          
          <div className="plans-section">
            <h3 className="plans-subtitle">🏠 Plans 2D</h3>
            <div className="plans-grid">
              {plans2D.map((plan, index) => (
                <PricingCard key={index} title={plan.title} price={plan.price} />
              ))}
            </div>
          </div>

          <div className="plans-section">
            <h3 className="plans-subtitle">🏢 Plans avec 3D</h3>
            <div className="plans-grid">
              {plans3D.map((plan, index) => (
                <PricingCard key={index} title={plan.title} price={plan.price} is3D={plan.is3D} />
              ))}
            </div>
          </div>

          <div className="options-section">
            <h3 className="plans-subtitle">🏗️ Options supplémentaires</h3>
            <div className="options-grid">
              {options.map((option, index) => (
                <div key={index} className="option-card">
                  <span className="option-level">{option.level}</span>
                  <span className="option-price">{option.price}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="disclaimer">Les tarifs peuvent varier selon la complexité du projet.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PlansTarifs;