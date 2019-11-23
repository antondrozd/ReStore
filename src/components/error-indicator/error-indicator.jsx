import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <i className="fas fa-exclamation-triangle"></i>
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
    </div>
  );
};

export default ErrorIndicator;
