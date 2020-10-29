import React, { useState } from "react";
import "./Field.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Field: React.FC<Props> = ({ label, error, type, ...inputProps }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="field">
      {label ? <label className="field-label">{label}</label> : null}
      <div className="field-input">
        <input {...inputProps} type={isPassword && show ? "text" : type} />
        {isPassword ? (
          <i
            className="material-icons eye"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            remove_red_eye
          </i>
        ) : null}
      </div>
      <span className="error">{error}</span>
    </div>
  );
};

export default Field;
