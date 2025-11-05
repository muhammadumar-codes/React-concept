import "./loader.css";

const ProfessionalLoader = ({ 
  message = "Loading...", 
  subMessage = "Please wait" 
}) => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="spinner"></div>
        <div className="loading-content">
          <h3 className="loading-text">{message}</h3>
          <p className="loading-subtext">{subMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalLoader;