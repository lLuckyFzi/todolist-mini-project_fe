import React from "react";
import "../Pages/Styles/DayDateModal.css";

const DayDateInput = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      value={props.values}
      onChange={props.onChange}
      name={props.names}
      {...props.register}
    />
  );
};

export default DayDateInput;
