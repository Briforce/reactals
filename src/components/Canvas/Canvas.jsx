import React, { Component } from "react";

class Canvas extends Component {
  componentDidMount() {
    let canvas = this.refs.canvas.getContext("2d");
    let mag = 200;
    let panX = 4;
    let panY = 3;
    let maxIter = 100;

    for (let x = 0; x < this.props.height; x++) {
      for (let y = 0; y < this.props.width; y++) {
        let m = this.mandelIter(x / mag - panX, y / mag - panY, maxIter);
        canvas.fillStyle = m === 0 ? "#000" : "hsl(0, 100%, " + m + "%)";
        canvas.fillRect(x, y, 1, 1);
      }
    }
  }

  mandelIter(x, y, maxIter) {
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
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
}

export default Canvas;
