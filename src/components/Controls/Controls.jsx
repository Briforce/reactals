import LabeledInput from "../LabeledInput";
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
    {controlLabels.map(({ label, dataKey }) => {
      const onChange = newValue =>
        setControls({ ...controls, [dataKey]: newValue });

      return (
        <LabeledInput
          key={dataKey}
          dataKey={dataKey}
          label={label}
          onChange={onChange}
          value={controls[dataKey]}
        />
      );
    })}
  </div>
);

export default Controls;
