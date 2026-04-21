import "../styles/PricingCard.css";

const PricingCard = ({ title, price, is3D = false }) => {
  return (
    <div className={`pricing-card ${is3D ? "pricing-card-3d" : ""}`}>
      <h3 className="pricing-card-title">{title}</h3>
      <p className="pricing-card-price">{price}</p>
    </div>
  );
};

export default PricingCard;