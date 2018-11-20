import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoContainer from './videocontainer';
import NavBar from './navbar';
import Footer from './footer';
import videolist from './videolist'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar/>
        </header>
        <div style={{height:'200px', width:'100%'}}></div>
        <VideoContainer category="ulubione" videolist={videolist}/>
        <VideoContainer category="dokumentalne" videolist={videolist}/>
        <VideoContainer category="sci-fi" videolist={videolist}/>
        <VideoContainer category="akcji" videolist={videolist}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
