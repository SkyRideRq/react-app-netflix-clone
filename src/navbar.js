import React, { Component } from 'react';
class NavBar extends Component {
    render () {
        return (
            <nav>
                <a href="index"> 
                    <img src="../img/facebook-icon.png" alt="youtube collection"></img>
                </a>
                <ul>
                    <li>Strona główna</li>
                    <li>Filmy</li>
                    <li>Filmiki</li>
                    <li>ostatnio dodane</li>
                    <li>moja lista</li>
                    <li>szukaj</li>
                    <li>dzieci</li>
                    <li>powiadomienia</li>
                    <li>profile</li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;