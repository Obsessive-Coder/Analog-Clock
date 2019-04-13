import React from 'react';
import ClockHand from './ClockHand';

export default function Clock(props) {
  return (
    <div className="circle clock-body">
      <ClockHand type="second" />
      <ClockHand type="minute" />
      <ClockHand type="hour" />
      <div className="circle centered-setup clock-center"></div>
    </div>
  );
}
