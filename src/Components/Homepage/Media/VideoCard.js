import React, { Component } from 'react';

class VideoCard extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div onClick={() => this.props.modalTrigger(this.props.data.id)} className="card small media-card modal-trigger" data-target="modal2">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={this.props.data.embed} 
                    title="media-video-card-frame"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        )
    }

}

export default VideoCard;