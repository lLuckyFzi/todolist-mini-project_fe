import React from "react";

const Title = (props) => {
  return <p className={props.className}>{props.children}</p>;
};

export default Title;
