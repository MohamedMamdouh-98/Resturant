import React, { Component } from "react"
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Intro from "./components/Intro/Intro";
import Navs from "./components/Navs/Navs";



class App extends Component {
  
  render() { 
    return (
      <div className="App">
        <Navs/>
        <Home/>
        <About/>
        <Intro/>
      </div>
    );
  }
}

export default App;
