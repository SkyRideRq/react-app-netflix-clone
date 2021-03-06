import React, { Component } from 'react';
import VideoBox from './videobox';


class VideoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           videolist: this.props.videolist,
        };
    }
componentDidMount () {

}
    scroll = (e) => {
       
    }


    render () {
        const videolist= this.state.videolist.map( (e, i) => {
            return (
                <div>
                    <VideoBox
                    child={this.state.child}
                    key={i}
                    desc={e.desc} 
                    title={e.title}
                    img={e.img}
                    videoId={e.videoId}>
                    </VideoBox>
                </div>
            )
        })
        return (
            <div>
                <div className="paddles">
                    <button className="left-paddle paddle" onClick={this.scroll}>
                        〈
                    </button>
                    <button className="right-paddle paddle">
                        〉
                    </button>
                </div>
                <h1>{this.props.category}</h1>
                <div className='VideoContainer'>
                    {videolist}
                </div>
            </div>
            
        )
    }
}
export default VideoContainer;