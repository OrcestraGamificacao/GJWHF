import { useRef, useEffect } from "react";

const TextToImage = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // // context.clearRect(0, 0, canvas.width, canvas.height);
    // context.clearRect(0, 0, 200, 100);
    context.fillText(props.text, props.width/2, 0, props.width);
    context.fillStyle = "white";
    context.textBaseline = "top";
    context.textAlign = "center";
    context.font = `${props.textSize}px Sans-Serif`;
    
  }, [props.text, props.width, props.textSize]);

  return <canvas width={props.width} height={props.textSize} ref={canvasRef} />;
};

const TextToImageWithShadow = (props) => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      // // context.clearRect(0, 0, canvas.width, canvas.height);
      // context.clearRect(0, 0, 200, 100);
      context.fillText(props.text, props.width/2, 0, props.width);
      context.fillStyle = "white";
      context.textBaseline = "top";
      context.textAlign = "center";
      context.font = `${props.textSize}px Sans-Serif`;
      context.shadowColor = "hsla(0,0%,100%,.3)";
      context.shadowBlur = 3;
      context.shadowOffsetY = 1.5;
      context.shadowOffsetX = 1.5;
      console.log("entrou no useeffect do texttoimage")
    }, [props.text, props.width, props.textSize]);
  
    return <canvas width={props.width} height={props.textSize} ref={canvasRef} />;
  };



export {TextToImage, TextToImageWithShadow};
