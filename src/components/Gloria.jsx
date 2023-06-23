import React, { useRef } from 'react';
import Groria from '../gloria/Gloria.mp4'
import "./Box_Apresentacao.css";

const Gloria = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const canvas2Ref = useRef(null);
  const tolerance = 205;
  const referenceColor = {r:0, g:255, b:0}

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
      video.addEventListener('play', () => {
        canvas.width = video.videoWidth / 5;
        canvas.height = video.videoHeight / 5;
        canvas2.width = 500;
        canvas2.height = 450;
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
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i + 0];
        const g = data[i + 1];
        const b = data[i + 2];

        const color = {r, g, b};

        if(distance(color, referenceColor) < tolerance){
          data[i + 3] = 0
        }
      }

      const offsetX = (canvas2.width - canvas.width) / 2;
      const offsetY = (canvas2.height - canvas.height);
      ctx2.putImageData(frame, offsetX, offsetY);
    };

    doLoad();
  };

  return (
    <div>
      <video id="video" ref={videoRef} src={Groria} className="none"></video>
      <canvas id="canva" ref={canvasRef} className="none"></canvas>
      <canvas id="c2" ref={canvas2Ref} className="gloria-imagem"></canvas>
      <button id="botao" onClick={handleClick} className="botao-play">Load Gloria</button>
    </div>
  )
}

export default Gloria
