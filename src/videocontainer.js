import React, { Component } from 'react';
import VideoBox from './videobox';
import videolist from './videolist'

class VideoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           videolist: videolist
        };
    }
    handleMouseOver = (e) => {
        e.preventDefault();
        e.target.width = '400px';
        e.target.height = '200px'
    }
    handleMouseOut = (e) => {
        e.preventDefault();
        e.target.width = '200px';
        e.target.height = '100px'
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log('clik')
        e.target.width = '100vw';
        e.target.height = '100vh'
    }
    render () {
        const videolist= this.state.videolist.map( (e, i) => {
            return (
                <div 
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.handleClick}
                >
                    <VideoBox 
                    key={i} 
                    videoId={e.videoId} 
                    opts={e.opts} 
                    desc={e.desc} 
                    title={e.title}/>
                </div>
            )
        })
        return (
            <div className='VideoContainer'>
                {videolist}
            </div>
        )
    }
}
export default VideoContainer;