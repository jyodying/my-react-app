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

/*function App() {
  const firstName = "Jedsada";
  const lastName = "Yodying";
  const date = new Date(2018, 4, 10, 11, 56);
  const hours = date.getHours();
  let timeOfDay;
  const h1Styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontSize: "48px"
  }

  if (hours < 12) {
    timeOfDay = "morning";
    h1Styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    h1Styles.color = "#2E0927"
  } else {
    timeOfDay = "night";
    h1Styles.color = "#D90000"
  }



  return (
    <div>
      <h1 style={h1Styles}>Good {timeOfDay}!</h1>
      <h1>It is currently about {date.getHours() % 12} o'clock</h1>
      <h1>Hello {firstName + " " + lastName}!</h1>
      <h1>Hello {`${firstName} ${lastName}`}!</h1>
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )

}*/

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.
class App extends React.Component {
  constructor() {
    super()
    // Given a stateless functional component, add state to it
    // state should have a property called `isLoggedIn` which is a boolean
    // (true if logged in, false if not)
    // Then, give your best shot at rendering the word "in" if the user is logged in
    // or "out" if the user is logged out.
    this.state = {
      name: "Maluma",
      age: 25,
      isLoggedIn: false
    }
  }
  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}

export default App;