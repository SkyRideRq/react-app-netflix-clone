import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoContainer from './videocontainer';
import NavBar from './navbar';
import Footer from './footer';
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar/>
        </header>
        <div style={{height:'200px', width:'100%'}}></div>
        <VideoContainer category="ulubione"/>
        <Footer/>
      </div>
    )
  }
}

export default App;
