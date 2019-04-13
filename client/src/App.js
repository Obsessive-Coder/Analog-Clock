import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Moment from 'react-moment';
import clockHand from './clock-hand.png';

class App extends Component {
  constructor(props) {
    super(props);

    // Bind class methods.
    this.setClockHandDegrees = this.setClockHandDegrees.bind(this);
    this.setHandDegree = this.setHandDegree.bind(this);
  }

  setClockHandDegrees() {
    this.setHandDegree('second-hand', 'second');
    this.setHandDegree('minute-hand', 'minute');
    this.setHandDegree('hour-hand', 'hour');
  }

  setHandDegree(elementId, type) {
    const currentTime = moment();
    const degreeAmount = type === 'hour' ? 30 : 6;
    const handDegree = currentTime[type]() * degreeAmount;
    document.getElementById(elementId).style.transform = `rotate(${handDegree}deg)`;
  }

  render() {
    return (
      <React.Fragment>
        <div className="clock-container">
          <div
            className="my-5 bg-light border border-dark clock-body">
            <img
              id="second-hand"
              src={clockHand}
              alt="second hand"
              className="clock-hand second-hand"
            />
            <img
              id="minute-hand"
              src={clockHand}
              alt="minute hand"
              className="clock-hand minute-hand"
            />
            <img
              id="hour-hand"
              src={clockHand}
              alt="hour hand"
              className="clock-hand hour-hand"
            />
          </div>
        </div>
        <Moment
          interval={1000}
          onChange={this.setClockHandDegrees}
        />
      </React.Fragment>
    );
  }
}

export default App;
