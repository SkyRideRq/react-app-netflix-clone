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
        <NavBar/>
        <VideoContainer/>
        <Footer/>
      </div>
    )
  }
}

export default App;
