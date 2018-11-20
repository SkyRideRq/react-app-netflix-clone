import React, { Component } from 'react';

class Hero extends Component {
    render () {
        return (
            <div
                className="hero"
                style={{ backgroundImage: 'url(https://img.youtube.com/vi/2g811Eo7K8U/0.jpg)' }}
                >
                <div className="hero-content">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                    <p>{this.props.desc}</p>
                    <div className='button-wrapper'>
                        <a href="#" className="hero-button">
                            Hero Button
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Hero;