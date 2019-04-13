import React from 'react';
import ClockHand from './ClockHand';
const handTypes = ['second', 'minute', 'hour'];
export default function ClockBody(props) {
  return (
    <div className="circle clock-body">
      {handTypes.map((handType, index) => (
        <ClockHand key={handType + index} type={handType} />
      ))}
      <div className="circle centered-setup clock-center"></div>
    </div>
  );
}
