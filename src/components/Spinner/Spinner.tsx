import React from "react";
import "./Spinner.scss";

const Spinner: React.FC = () => {
  return (
    <svg viewBox="0 0 50 50" className="spinner">
      <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    </svg>
  );
};

export default Spinner;
