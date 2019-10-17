import React, { useState } from "react";
import Fractal from "../Fractal";
import AutoSizer from "react-virtualized-auto-sizer";
import Controls from "../Controls/Controls";

import "./App.less";

const App = () => {
  const [controls, setControls] = useState({
    fillColor: 0,
    magnification: 200,
    maxIterations: 200,
    panX: 3,
    panY: 3
  });

  return (
    <div className="App-Container">
      <Controls controls={controls} setControls={setControls} />
      <AutoSizer>
        {({ height, width }) => (
          <Fractal height={height} width={width} {...controls} />
        )}
      </AutoSizer>
    </div>
  );
};

export default App;
