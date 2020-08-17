import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        Hello world! What you doing? :D 
        <FirstComponent />
        <SecondComponent/>
        <ThirdComponent/>
      </div>
    )
  }
}


//Class Component
class FirstComponent extends Component{
  render(){
    return(
      <div className="firstComponent">
        <p>
          First component!
        </p>
      </div>
    )
  }
}

//Class Component
class SecondComponent extends Component{
  render(){
    return(
      <div className="secondComponent">
        <p>
          Second component!
        </p>
      </div>
    )
  }
}

function ThirdComponent(){
  return(
    <div className="thirdComponent">
      <p>
        Third component!
      </p>
    </div>);
}


export default App;
