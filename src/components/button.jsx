// write button card here

import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <button className="view-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
