import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

// interface MainCanvasProps {
//   currentWidth?: number;
//   currentHeight?: number;
// }

function MainCanvas() {
  const canvasEl = useRef(null);
  useEffect(() => {
    const options = {
      backgroundColor: "rgb(100,100,200)",
      selectionLineWidth: 5,
    };
    const canvas = new fabric.Canvas(canvasEl.current, options);
    updateCanvasContext(canvas);
    return () => {
      updateCanvasContext(null);
      canvas.dispose();
    };
  }, []);

  function updateCanvasContext(canvas: fabric.Canvas | null) {
    if (canvas) {
      canvas.setHeight(
        (window.innerHeight > 0 ? window.innerHeight : window.screen.height) *
          0.75
      );
      canvas.setWidth(
        (window.innerWidth > 0 ? window.innerWidth : window.screen.width) * 0.75
      );
    }
  }

  return (
    <canvas
      ref={canvasEl}
      className="w-full h-full bg-slate-100 shadow-2xl rounded-xl"
    ></canvas>
  );
}

export default MainCanvas;
