import React, { useState } from "react";

import "./LabeledInput.less";

const LabeledInput = ({ label, dataKey, onChange, value }) => {
  const [localValue, setLocalValue] = useState(value);

  const onEnter = event =>
    event.key === "Enter" ? onChange(localValue) : null;

  const onLocalChange = event => {
    setLocalValue(event.target.value);
  };

  return (
    <span className="Controls-Input-Container" key={dataKey}>
      <span className="Controls-Input-label">{label}</span>
      <input
        className="Controls-Input"
        onChange={onLocalChange}
        onKeyPress={onEnter}
        value={localValue}
      />
    </span>
  );
};

export default LabeledInput;
