import React from "react";
import "../Pages/Styles/Fallback.css";

const Fallback = (props) => {
  return <h4 className={props.className || "fallback"}>{props.children}</h4>;
};

export default Fallback;
