import "../styles/Card.css";

const Card = ({ title, description, price, icon: Icon, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {Icon && (
        <div className="card-icon">
          <Icon size={48} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {price && <p className="card-price">{price}</p>}
    </div>
  );
};

export default Card;