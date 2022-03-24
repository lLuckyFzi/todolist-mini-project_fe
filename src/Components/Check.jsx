import React from "react";

const Check = (props) => {
  return (
    <label className="check-list">
      <input
        type="checkbox"
        checked={props.checked}
        onClick={props.onClick}
        readOnly={true}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Check;
