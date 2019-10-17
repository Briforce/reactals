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

const Fractal = ({
  fillColor,
  height,
  magnification,
  maxIterations,
  panX,
  panY,
  width
}) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current.getContext("2d");
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let m = mandelIter(
          x / magnification - panX,
          y / magnification - panY,
          maxIterations
        );
        canvas.fillStyle = m === 0 ? "#000" : `hsl(${fillColor}, 100%, ${m}%)`;
        canvas.fillRect(x, y, 1, 1);
      }
    }
  }, [
    canvasRef,
    fillColor,
    height,
    magnification,
    maxIterations,
    panX,
    panY,
    width
  ]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default memo(Fractal);
