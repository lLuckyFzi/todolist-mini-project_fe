import React from "react";
import "../Pages/Styles/AddButton.css";

const Add = (props) => {
  return (
    <div className="add-button" onClick={props.onClick}>
      +
    </div>
  );
};

export default Add;
