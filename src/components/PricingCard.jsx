import "../styles/PricingCard.css";

const PricingCard = ({ title, price, is3D = false }) => {
  return (
    <div className={`pricing-card ${is3D ? "pricing-card-3d" : ""}`}>
      <h3 className="pricing-card-title">{title}</h3>
      <div className="pricing-divider"></div>
      <p className="pricing-card-price">
        <span className="price-unit">À partir de</span>
        {price}
      </p>
    </div>
  );
};

export default PricingCard;