import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
class App extends Component {
  constructor() {
    super();

    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      limit: 0,
      count: 0
    }
  }
  componentDidMount() {

  }
  incrementTime(evt){
    evt.preventDefault();

    
    setInterval( () => { 
      if(this.state.seconds == 0){
        this.setState({
          seconds: 60,
          minutes: this.state.minutes - 1
        })
      }
      if(this.state.minutes == 0){
        this.setState({
          minutes: 59,
          hours: this.state.hours - 1
        })
      }
      if(this.state.hours == 0){
        this.setState({
          hours: 23,
          days: this.state.days = this.state.days - 1
        })
      }
      
      this.setState({
        seconds: this.state.seconds - 1
      })
    }, 1000);
  }


  updateInputValue(evt, counter) {
    const name = evt.target.name;
    
    this.setState({
      [name]: Number.parseInt(evt.target.value)
    });
  }


  coinFlip(){
    return Math.random() >= 0.5;
  }


  randomNumber(evt){
    evt.preventDefault();
    if(this.state.limit === 1)
      this.setState({
        count: 0
      });

    

    const max = this.state.limit - 1;
    const len = max.toString(2).length;
    
    let count;
    do {
      let binary = "";
      for (var i = 0; i < len; i++) {
        binary += this.coinFlip() ? "1" : "0";
      }
      count = parseInt(binary, 2);
    } while (count > max);

    this.setState({
      count: count
    });
  }

  
  render() {
    const { seconds, minutes, hours, days, count } = this.state
    return (
      <div className="CounterApp">
        <h2>React Countdown</h2>
        <form onSubmit={this.incrementTime} className="TimerForm">
            <input type="text" placeholder="seconds" name="seconds" onChange={evt => this.updateInputValue(evt)} />
            <input type="text" placeholder="minutes" name="minutes" onChange={evt => this.updateInputValue(evt)}/>
            <input type="text" placeholder="hours" name="hours" onChange={evt => this.updateInputValue(evt)} />
            <input type="text" placeholder="days" name="days" onChange={evt => this.updateInputValue(evt)} />
            <input type="submit" value="Submit" onClick={this.incrementTime.bind(this)} />
        </form>
        <div className="CounterContainer">
          <Counter name={"Days"} number={days}/>
          <Counter name={"Hours"} number={hours}/>
          <Counter name={"Minutes"} number={minutes}/>
          <Counter name={"Seconds"} number={seconds}/>
        </div>
        <div className="Cointainer">
        <h2>Coin Flip</h2>
        <form onSubmit={this.incrementTime} className="CoinForm">
            <input type="text" placeholder="limit" name="limit" onChange={evt => this.updateInputValue(evt)} />
            <input type="submit" value="Submit" onClick={this.randomNumber.bind(this)} />
        </form>
        <h2>{count}</h2>
        </div>

      </div>
    );
  }
  
}

export default App;
