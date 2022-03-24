import React from "react";
import "../Pages/Styles/Input.css";

const AddInputTask = (props) => {
  return (
    <input
      style={{ paddingLeft: props.paddingleft }}
      className={props.className || "inputReuse"}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      name={props.names}
      {...props.register}
    />
  );
};

export default AddInputTask;
