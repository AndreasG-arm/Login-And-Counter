import React from 'react';
import Login from './Login';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      username: '',
      password: '',
      dob: '',
      myNum: 0,
      numHistory: ['', '', '', '']
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  //should be calling the axios api off the submit button
  handleClick = () => {
    console.log(this.state);
  }

  updateHistory = (newNum) => {
    let newNumHistory = this.state.numHistory;
    newNumHistory[3] = newNumHistory[2];
    newNumHistory[2] = newNumHistory[1];
    newNumHistory[1] = newNumHistory[0];
    newNumHistory[0] = newNum;
    this.setState({numHistory: newNumHistory});
  }

  increment = (amount) => {
    if(amount === 0){
      this.setState({myNum: 0});
      this.updateHistory(this.state.myNum);
    } else{
      this.setState({myNum: this.state.myNum + amount});
      this.updateHistory(this.state.myNum);
    }

    //console.log(this.state.myNum);
  }

  colourSelector = (num) => {
    if(num === 0){
        return "zero";
    }else if((num%2) === 0){
        return "even";
    }else{
        return "odd";
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' render = {() => <Login state={this.state} handleChange={this.handleChange} handleClick={this.handleClick}/>}/>
            <Route path='/counter' render = {() => <Counter colour={this.colourSelector} 
            num={this.state.myNum} nums={this.state.numHistory} buttAction={this.increment}/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
