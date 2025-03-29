import React from "react";

import "../Pages/Styles/SecondaryButton.css";

const SecondaryButton = (props) => {
  return (
    <button
      className={props.className || "secondary-btn"}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      {...props}
    >
      {props.children || "Button"}
    </button>
  );
};

export default SecondaryButton;
