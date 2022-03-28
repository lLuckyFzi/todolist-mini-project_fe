import React from "react";
import "../Pages/Styles/FormTitle.css";

const FormTitle = (props) => {
  return <h1 className="form-title">{props.children || "Title"}</h1>;
};

export default FormTitle;
