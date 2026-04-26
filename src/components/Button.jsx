import "../styles/Button.css";

const Button = ({ children, onClick, variant = "primary", className = "", style,title }) => {
  return (
    <button 
      onClick={onClick} 
      className={`btn btn-${variant} ${className}`}
      style={style}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;