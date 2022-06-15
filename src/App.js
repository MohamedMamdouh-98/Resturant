import React, { Component } from "react"
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navs from "./components/Navs/Navs";



class App extends Component {
  
  render() { 
    return (
      <div className="App">
        <Navs/>
        <Home/>
        <About/>
      </div>
    );
  }
}

export default App;
