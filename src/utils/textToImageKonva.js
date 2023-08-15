import { useRef, useEffect } from "react";
import { Layer, Stage, Text } from "react-konva";

const TextToImage = (props) => {
 
  return(
  <Stage width={props.width} height={props.textSize}>
    <Layer>
      <Text text={props.text} fontSize={props.textSize}/>
    </Layer>
  </Stage>
 )
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
      
    }, [props.text, props.width, props.textSize]);
  
    return <canvas width={props.width} height={props.textSize} ref={canvasRef} />;
  };



export {TextToImage, TextToImageWithShadow};
