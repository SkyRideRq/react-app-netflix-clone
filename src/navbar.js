import React, { Component } from 'react';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
           text: 'Szukaj',
        };
    }
    handleChange = (e) => {
        let text = e.target.value;
        this.setState({
            text:text
        });
    }
    render () {
        return (
            <nav>
                <a href="index"> 
                    <img src="../img/logo_placeholder.png" alt="youtube collection"></img>
                </a>
                <ul>
                    <li>Strona główna</li>
                    <li>Filmy</li>
                    <li>Filmiki</li>
                    <li>ostatnio dodane</li>
                    <li>moja lista</li>
                </ul>
                <input 
                    value={this.state.text} 
                    onChange={this.handleChange}>
                </input>
                <ul className='right'>
                    <li>dzieci</li>
                    <li>powiadomienia</li>
                    <li>profile</li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;