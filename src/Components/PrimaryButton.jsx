import React from "react";
import "../Pages/Styles/PrimaryButton.css";

const PrimaryButton = (props) => {
  return <p className="primary-btn">{props.children}</p>;
};

export default PrimaryButton;
