import React from "react";

import "./Controls.less";

const controlLabels = [
  { label: "Fill Color", dataKey: "fillColor" },
  { label: "Magnification", dataKey: "magnification" },
  { label: "Pan X", dataKey: "panX" },
  { label: "Pan Y", dataKey: "panY" },
  { label: "Max Iterations", dataKey: "maxIterations" }
];

const Controls = ({ controls, setControls }) => (
  <div className="Controls-Container">
    {controlLabels.map(({ label, dataKey }) => (
      <span className="Controls-Input-Container" key={dataKey}>
        <span className="Controls-Input-label">{label}</span>
        <input
          className="Controls-Input"
          onChange={event =>
            setControls({ ...controls, [dataKey]: event.target.value })
          }
          value={controls[dataKey]}
        />
      </span>
    ))}
  </div>
);

export default Controls;
