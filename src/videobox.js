import React, { Component } from 'react';



class VideoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children:''
        };
        
    }
    // handleClick = () => {
    //     console.log('klik')
    //     //e.preventDefault()
    //     console.log(this.state.children)
    //     if (this.state.children===this.props.child){
    //         this.setState({
    //             children:''
    //         });
    //     } else {
    //         this.setState({
    //             children: this.props.children
    //         });
    //     }
    // }
    handleClick = () => {
        console.log('klik')
        //e.preventDefault()
        console.log(this.state.children)
        if (this.state.children===this.props.children){
            this.setState({
                children:''
            });
        } else {
            this.setState({
                children: this.props.children
            });
        }
    }
    render () { 
        return (
        <div className='videoitem' >
            {this.state.children}
            <div  className='videobox'>
                <div> 
                    <img src={this.props.img} alt="gfg"/>
                </div>
                <div className='videodesc'>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                    <div>
                        <button className='play' onClick={this.handleClick}>▶</button>
                        <button className='mute'>👍</button>
                        <button className='like'>3</button>
                        <button className='dislike'>4</button>
                        <button className='add'>5</button>
                        
                    </div>
                    
                </div>
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