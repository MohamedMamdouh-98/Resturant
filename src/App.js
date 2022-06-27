import './App.css';
import React, { Component } from "react"
import About from "./components/About/About";
import Barllax from "./components/Barllax/Barllax";
import Explore from "./components/Explore/Explore";
import Faq from "./components/Faq/Faq";
import Home from "./components/Home/Home";
import Intro from "./components/Intro/Intro";
import Navs from "./components/Navs/Navs";
import Testimonials from "./components/Testimonials/Testimonials";
import Video from "./components/video/Video";
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Navs/>
        <Home/>
        <About/>
        <Intro/>
        <Video/>
        <Explore/>
        <Testimonials/>
        <Faq/>
        <Barllax/>
        <Subscribe/>
        <Footer/>
      </div>
    );
  }
}

export default App;
