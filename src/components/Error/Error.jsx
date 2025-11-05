import React from 'react';
import "./Error.css"

const ApiError = ({ 
  error, 
  onRetry, 
  statusCode,
  errorType = "API Error"
}) => {
  const getErrorMessage = () => {
    if (statusCode === 404) {
      return "The requested resource was not found.";
    } else if (statusCode === 500) {
      return "Internal server error. Please try again later.";
    } else if (statusCode === 403) {
      return "You don't have permission to access this resource.";
    } else if (statusCode === 401) {
      return "Please log in to access this resource.";
    } else if (!navigator.onLine) {
      return "You appear to be offline. Please check your internet connection.";
    } else {
      return "We encountered an error while processing your request. Please try again.";
    }
  };

  const getErrorTitle = () => {
    if (statusCode === 404) return "Page Not Found";
    if (statusCode === 500) return "Server Error";
    if (statusCode === 403) return "Access Denied";
    if (statusCode === 401) return "Unauthorized";
    if (!navigator.onLine) return "You're Offline";
    return "Connection Error";
  };

  return (
    <div className="api-error-container">
      <div className="api-error-content">
        <div className={`error-status status-${statusCode || 'generic'}`}>
          {statusCode || "Error"}
        </div>
        
        <h2 className="api-error-title">{getErrorTitle()}</h2>
        <p className="api-error-message">{getErrorMessage()}</p>
        
        <div className="api-error-actions">
          {onRetry && (
            <button className="retry-btn" onClick={onRetry}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
              Try Again
            </button>
          )}
          
          <button 
            className="home-btn" 
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </button>
          
          <button 
            className="contact-btn"
            onClick={() => window.open('mailto:support@yourapp.com')}
          >
            Contact Support
          </button>
        </div>

        {process.env.NODE_ENV === 'development' && error && (
          <div className="debug-info">
            <h4>Debug Information:</h4>
            <p>{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiError;