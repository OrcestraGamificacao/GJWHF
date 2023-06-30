import React from 'react';
import "../styles/Gloria.css";


const Gloria = ({ animacao, display }) => {
    return (
        <img src={animacao} alt='gloria' className='video-gloria' style={{ display }}></img>
    )
}

Gloria.defaultProps = {
    display: "block"
}

export default Gloria
