import React, { useRef } from 'react';
import "../styles/BoxApresentacao.css";
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Gloria = ({animacao, maxWidth, scale, styleProps}) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const canvas2Ref = useRef(null);
  const tolerance = 205;
  const referenceColor = {r:0, g:255, b:0}

  const width = (window.innerWidth > maxWidth ? maxWidth : window.innerWidth * scale)
  const handleClick = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvas2 = canvas2Ref.current;
    const ctx2 = canvas2.getContext('2d');

    function distance(color, reference){
      const diff = { r: reference.r - color.r, g: reference.g - color.g, b: reference.b - color.b}
      const module = Math.sqrt((diff.r * diff.r) + (diff.g * diff.g) + (diff.b * diff.b))
      return module
    }

    const doLoad = () => {
        video.play();
        video.addEventListener('loadedmetadata', () => {
          let scalar = 720 / width
          canvas.width = video.videoWidth / scalar;
          canvas.height = video.videoHeight / scalar;
          canvas2.width = width;
          canvas2.height = width;
          timerCallback();
        }, false);
      };

      const timerCallback = () => {
        if (video.paused || video.ended) {
          return;
        }
        computeFrame();
        setTimeout(() => {
          timerCallback();
        }, 0);
      };

      const computeFrame = () => {
        ctx.drawImage(video, 10, 0, canvas.width, canvas.height);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = frame.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i + 0];
          const g = data[i + 1];
          const b = data[i + 2];

          const color = { r, g, b };

          if (distance(color, referenceColor) < tolerance) {
            data[i + 3] = 0;
          }
        }

        const offsetX = (canvas2.width - canvas.width) / 2;
        const offsetY = (canvas2.height - canvas.height);
        ctx2.putImageData(frame, offsetX, offsetY);
      };

      doLoad();
    };

    useEffect(() => {
      handleClick(); // Chama handleClick quando o componente for montado
      // const {innerWidth: width, innerHeight: height} = window;
    });


  return (
    <div style={styleProps} className='container-gloria'>
      <video id="video" ref={videoRef} src={animacao} className="none"  autoPlay muted preload='auto'></video>
      <canvas id="canva" ref={canvasRef} className="none"></canvas>
      <canvas id="c2" ref={canvas2Ref} className="gloria-imagem"></canvas>
    </div>
  )
}


Gloria.propTypes = {
    animacao: PropTypes.string.isRequired,
    maxWidth: PropTypes.isRequired,
    scale: PropTypes.isRequired, // Prop para a URL do vídeo
    styleProps: PropTypes.arrayOf(PropTypes.string)
};

Gloria.defaultProps = {
  styleProps: {position: 'absolute', zIndex:2}
};

export default Gloria
