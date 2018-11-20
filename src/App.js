import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoContainer from './videocontainer';
import NavBar from './navbar';
import Footer from './footer';
import videolist from './videolist'
import Hero from './hero';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar/>
        </header>
        <Hero title={videolist[0].title} subtitle={"Watch funny kitty video now!"} desc={videolist[0].desc}/>
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
