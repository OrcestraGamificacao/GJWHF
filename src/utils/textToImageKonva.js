import { Layer, Stage, Text } from "react-konva";

const TextToImage = (props) => {
 
  return(
  <Stage width={props.width} height={props.textSize}>
    <Layer>
      <Text
        width={props.width}
        text={props.text}
        fill="white"
        fontSize={props.textSize}
        fontFamily="Sans-Serif"
        align="center"
        verticalAlign="middle"
        />
    </Layer>
  </Stage>
 )
};

const TextToImageWithShadow = (props) => {
  return(
    <Stage width={props.width} height={props.textSize*2}>
      <Layer>
        <Text
          width={props.width}
          height={props.textSize*2}
          text={props.text}
          fill="white"
          fontSize={props.textSize}
          fontFamily="Sans-Serif"
          align="center"
          verticalAlign="middle"
          shadowColor="#ffffff"
          shadowBlur={3}
          shadowOffsetX={1.5}
          shadowOffsetY={1.5}
          shadowOpacity={0.3}
          />
      </Layer>
    </Stage>
  )
};



export {TextToImage, TextToImageWithShadow};
