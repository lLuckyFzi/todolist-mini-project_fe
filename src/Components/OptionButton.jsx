import React from "react";
import { BiEdit } from "react-icons/bi";
import "../Pages/Styles/OptionButton.css";

const OptionButton = (props) => {
  return (
    <div>
      <div className="option-btn">
        <span>
          <BiEdit
            onClick={props.onClick}
            style={{ height: "25px", width: "25px" }}
          />
        </span>
      </div>
    </div>
  );
};

export default OptionButton;
