import React, { Component } from 'react';
import VideoBox from './videobox';
import videolist from './videolist'

class VideoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           videolist: videolist,
           
        };
    }
    handleClick = () => {
        
        
    }
    render () {
        console.log(this)
        const videolist= this.state.videolist.map( (e, i) => {
            return (
                <div>
                    <VideoBox
                    child={this.state.child}
                    key={i}
                    desc={e.desc} 
                    title={e.title}
                    img={e.img}>
                        <iframe 
                            style={{position: 'fixed',
                            left: '0',
                            top:'0',
                            zIndex:'34',
                            background: '#201D1E',
                            padding: '10px 0',
                            width: '100%',
                            height:'100%'}}
                            src={"https://www.youtube.com/embed/"+e.videoId} 
                            autoPlay={1} 
                            frameBorder="0"
                        ></iframe>
                        <p 
                            onClick={this.handleClick}
                            style={{position: 'fixed',
                            opacity: '1',
                            left: '0',
                            top:'0',
                            zIndex:'35',
                            background: '#201D1E',
                            padding: '10px 0',
                            width:'150px',
                            borderRadius: '15px',
                            textAlign:'center',
                            padding: '25px'
                            }}
                        >Zamknij</p>
                    </VideoBox>
                </div>
            )
        })
        return (
            <div>
                <h1>{this.props.category}</h1>
                <div className='VideoContainer'>
                    {videolist}
                </div>
            </div>
            
        )
    }
}
export default VideoContainer;