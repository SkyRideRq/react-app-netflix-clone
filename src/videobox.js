import React, { Component } from 'react';



class VideoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity:'0',
            zindex:'-1',
            count:0
        };
    }
    handleClick = () => {
        if (this.state.opacity==="1"){
            this.setState({
                opacity:'0',
                zindex:'-1'
            });
        } else {
            this.setState({
                opacity: '1',
                zindex:'34'
            });
        }
    }
    handleClickLike = () => {
        this.setState({
            count:this.state.count+1
        });
    }
    handleClickUnlike = () => {
        this.setState({
            count:this.state.count-1
        });
    }
    render () {
        return (
        <div className='videoitem' >
            {/* {this.state.children} */}
            <div  className='videobox'>
                <div> 
                    <img src={this.props.img} alt="gfg"/>
                </div>
                <div className='videodesc'>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                    <div>
                        <button className='play' onClick={this.handleClick}>▶</button>
                        <button className='count'>{this.state.count}</button>
                        <button className='like' onClick={this.handleClickLike}>👍</button>
                        <button className='dislike' onClick={this.handleClickUnlike}>👎</button>
                        <button className='add'>+</button>
                        
                    </div>
                </div>
                <iframe 
                            style={{position: 'fixed',
                            opacity:this.state.opacity,
                            left: '0',
                            top:'0',
                            zIndex:this.state.zindex,
                            background: '#201D1E',
                            padding: '10px 0',
                            width: '100%',
                            height:'100%'}}
                            src={"https://www.youtube.com/embed/"+this.props.videoId} 
                            autoPlay={1} 
                            frameBorder="0"
                            title={this.props.title}
                        ></iframe>
                        <p 
                            onClick={this.handleClick}
                            style={{position: 'fixed',
                            opacity: this.state.opacity,
                            left: '0',
                            top:'0',
                            zIndex:this.state.zindex+1,
                            background: '#201D1E',
                            width:'150px',
                            borderRadius: '15px',
                            textAlign:'center',
                            padding: '25px'
                            }}
                        >Zamknij</p>
            </div>
        </div>
            
        )
    }
}
export default VideoBox;
// handleClick = () => {
//     console.log('klik')
//     //e.preventDefault()
//     console.log(this.state.children)
//     if (this.state.children===this.props.children){
//         this.setState({
//             children:''
//         });
//     } else {
//         this.setState({
//             children: this.props.children
//         });
//     }
// }