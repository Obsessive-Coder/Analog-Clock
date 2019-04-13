import React from 'react';
import ClockBody from './ClockBody';
import clockImage from '../clock-image.png';


export default function Clock(props) {
  return (
    <div className="clock-container">
      <ClockBody />
      <img
        src={clockImage}
        alt="clock background"
        className="circle clock-image"
      />
    </div>
  );
}
