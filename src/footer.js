import React, { Component } from 'react';
class Footer extends Component {
    render () {
        return (
            <footer>
                <div>
                    <a href="facebook.com"><img src="/img/facebook-icon.png" alt="facebook"/></a>
                    <a href="instagram.com"><img src="/img/instagram-icon.png" alt="instagram"/></a>
                    <a href="twitter.com"><img src="/img/twitter-icon.png" alt="twitter"/></a>
                    <a href="youtube.com"><img src="/img/youtube-icon.png" alt="youtube"/></a>
                </div>
                <div className='footer-list'>
                    <ul>
                        <li><a href="someplace.com">Dźwięk i napisy</a></li>
                        <li><a href="someplace.com">Media Center</a></li>
                        <li><a href="someplace.com">Prywatność</a></li>
                        <li><a href="someplace.com">Skontaktuj się z nami</a></li>
                    </ul>
                    <ul>
                        <li><a href="someplace.com">Audiodeskrepcja</a></li>
                        <li><a href="someplace.com">Relacje z inwestorami</a></li>
                        <li><a href="someplace.com">Informacje prawne</a></li>
                        
                    </ul>
                    <ul>
                        <li><a href="someplace.com">Centrum pomocy</a></li>
                        <li><a href="someplace.com">Praca</a></li>
                        <li><a href="someplace.com">Ustawienia plików cookie</a></li>
                        
                    </ul>
                    <ul>
                        <li><a href="someplace.com">Karty podarunkowe</a></li>
                        <li><a href="someplace.com">Warunki korzystania</a></li>
                        <li><a href="someplace.com">Informacje o filmie</a></li>
                        
                    </ul>
                </div>
                
            </footer>
        )
    }
}
export default Footer;