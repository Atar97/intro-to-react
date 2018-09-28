import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };

  }
  render() {
    let nowTime = this.state.time.toTimeString().split(' ')[0];
    let nowDate = this.state.time.toDateString();
    return (
      <div className="clock">
        <h1>Clock</h1>

        <div className="date-time">
          
        <section className="clock-row">
          <p>Time:</p>
          <p>{nowTime}</p>
        </section>

        <section className="clock-row">
          <p>Date:</p>
          <p>{nowDate}</p>
        </section>

        </div>
      </div>
    );

  }

  tick() {
    let time = this.state.time;
    time.setSeconds(time.getSeconds() + 1);
    this.setState({ time });
  }

  componentDidMount(){
    console.log(this.state.time);
    this.handle = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

}

export default Clock;
