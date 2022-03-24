import React from "react";

const DeleteButton = (props) => {
  return (
    <button className={props.className || "del-btn"} onClick={props.onClick}>
      -
    </button>
  );
};

export default DeleteButton;
