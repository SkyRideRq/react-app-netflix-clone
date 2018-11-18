import React, { Component } from 'react';
import YouTube from 'react-youtube';


class VideoBox extends Component {
    render () { 
        return (
            <div style={{width:'100px', height:'100px'} } className='videobox'>
                <YouTube
                    videoId={this.props.videoId}
                    opts={this.props.opts}
                    //onReady={this._onReady}
                />
                <div className='videodesc'>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>
            </div>
        )
    }
}
export default VideoBox;