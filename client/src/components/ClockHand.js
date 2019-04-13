import React from 'react';

export default function ClockHand(props) {
  const { type } = props;

  return (
    <div
      id={`${type}-hand`}
      className={`centered-setup clock-hand ${type}-hand`}>
    </div>
  );
}
