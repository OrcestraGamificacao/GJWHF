import React from 'react';
import "../styles/Gloria.css";


const Gloria = ({animacao}) => {
return (
<video autoPlay={true} loop={true} muted={true} src={animacao} className='video-gloria'></video>
)
}


export default Gloria
