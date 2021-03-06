import React, { Component, Fragment } from 'react';
import Clock from './components/Clock';
import Footer from './components/Footer';
import moment from 'moment';
import Moment from 'react-moment';
import './App.css';

export default class App extends Component {
  setClockHandDegrees = () => {
    // Set the degree of each clock hand.
    this.setHandDegree('second-hand', 'second');
    this.setHandDegree('minute-hand', 'minute');
    this.setHandDegree('hour-hand', 'hour');
  }

  setHandDegree = (elementId, type) => {
    const currentTime = moment();
    // Minute and second hand degrees.
    let handDegree = currentTime[type]() * 6;
    // If the hand type is "hour" then get the degrees.
    if (type === 'hour') {
      handDegree = this.getHourDegree(currentTime.hour(), currentTime.minute());
    }
    document.getElementById(elementId).style.transform = `rotate(${handDegree}deg)`;
  }

  getHourDegree = (hour, minute) => {
    // Return the degree for the hour hand taking into account the minutes.
    const hourDegree = hour * 30;
    return hourDegree + (minute / 60) * 30;
  }

  render() {
    return (
      <Fragment>
        <Clock />
        <Moment
          interval={1000}
          format="hh:mm:ss a"
          onChange={this.setClockHandDegrees}
          className="centered-setup moment"
        />
        <Footer />
      </Fragment>
    );
  }
}
