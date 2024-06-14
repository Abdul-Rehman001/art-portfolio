// LoadingScreen.jsx
import React from "react";
import "./loading.css"; // Create this file for custom styles

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
