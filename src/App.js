import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from "./Footer"



class Appx extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

//export default Appx;

function App() {
  const firstName = "Jedsada";
  const lastName = "Yodying";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }


  return (
    <div>
      <h1>Good {timeOfDay}!</h1>
      <h1>It is currently about {date.getHours() % 12} o'clock</h1>
      <h1>Hello {firstName + " " + lastName}!</h1>
      <h1>Hello {`${firstName} ${lastName}`}!</h1>
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )

}

export default App;