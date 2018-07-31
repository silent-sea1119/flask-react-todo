import React from "react";

const Button = ({ onClick, children, className, disabled = false }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
