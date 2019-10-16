import React, { memo, useEffect, useRef } from "react";

const mandelIter = (x, y, maxIter) => {
  let r = x;
  let i = y;
  for (let a = 0; a < maxIter; a++) {
    let tmpr = r * r - i * i + x;
    let tmpi = 2 * r * i + y;

    r = tmpr;
    i = tmpi;

    if (r * i > 5) {
      return (a / maxIter) * 100;
    }
  }

  return 0;
};

const Fractal = ({ height, width }) => {
  const canvasRef = useRef();

  useEffect(() => {
    let canvas = canvasRef.current.getContext("2d");
    let mag = 200;
    let panX = 4;
    let panY = 3;
    let maxIter = 100;

    for (let x = 0; x < height; x++) {
      for (let y = 0; y < width; y++) {
        let m = mandelIter(x / mag - panX, y / mag - panY, maxIter);
        canvas.fillStyle = m === 0 ? "#000" : "hsl(240, 100%, " + m + "%)";
        canvas.fillRect(x, y, 1, 1);
      }
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default memo(Fractal);
