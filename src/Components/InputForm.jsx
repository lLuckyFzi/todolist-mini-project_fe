import React, { useState } from "react";
import "../Pages/Styles/InputForm.css";

const InputForm = (props) => {
  return (
    <input
      type={props.type}
      name={props.names}
      {...props.register}
      placeholder={props.placeholder}
      className={props.className}
      style={{ width: props.width }}
    />
  );
};

export default InputForm;
