import React from "react";

import "./Controls.less";

const Controls = ({ controls, setControls }) => {
  const { fillColor, magnification, maxIterations, panX, panY } = controls;

  return (
    <div className="Controls-Container">
      {"Magnification: "}
      <input
        type="text"
        onChange={event =>
          setControls({ ...controls, magnification: event.target.value })
        }
        value={magnification}
      />
      {" Max Iterations: "}
      <input
        onChange={event =>
          setControls({ ...controls, maxIterations: event.target.value })
        }
        value={maxIterations}
      />
      {" Pan X: "}
      <input
        onChange={event =>
          setControls({ ...controls, panX: event.target.value })
        }
        value={panX}
      />
      {" Pan Y: "}
      <input
        onChange={event =>
          setControls({ ...controls, panY: event.target.value })
        }
        value={panY}
      />
      {" Color: "}
      <input
        onChange={event =>
          setControls({ ...controls, fillColor: event.target.value })
        }
        value={fillColor}
      />
    </div>
  );
};

export default Controls;
