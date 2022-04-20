import React, { useEffect, useRef } from "react";
import { useCanvas } from "../../utils/hooks";

export default function Canvas(props) {

  const { draw, options, ...rest } = props;
  const canvasRef = useRef(null);
  const { context, ...moreConfig } = options

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context, canvas);
  }, [draw]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
