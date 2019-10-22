import React, { Component } from 'react';

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: '#ffffff',
            titleColor: '#f0a830'
        }
    }

    changeColor = (e) => {
        const el = e.target;
        
        if (el.id === 'background') {
            document.querySelector('.color-selection').style.backgroundColor = el.value;
            if (el.value === '#000000') {
                document.querySelectorAll('color-picker-label').forEach(label => label.style.color = "white");
            } else {
                document.querySelectorAll('color-picker-label').forEach(label => label.style.color = "black");
            }
            this.setState({
                backgroundColor: el.value
            })
        } else if (el.id === 'title') {
            document.querySelector('.modal-footer-title').style.color = el.value;
            this.setState({
                titleColor: el.value
            })
        }
    }

    resetColors = (e) => {
        document.querySelector('.color-selection').style.backgroundColor = "white";
        document.querySelector('.modal-footer-title').style.color = "#f0a830";
        this.setState({
            backgroundColor: '#ffffff',
            titleColor: '#f0a830'
        })
    }

    render() {
        let featured;
        let videoInfo;
        if (this.props.data.image) {
            featured = <img src={this.props.data.image} className="hoverable" alt="" />
        } else if (this.props.data.embed) {
            featured = (
                <iframe
                    width="853" 
                    height="505" 
                    src={this.props.data.embed} 
                    className="hoverable"
                    title="media-video-modal-frame"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            );
            videoInfo = (
                <div className="video-info">
                    <span>YOUTUBE</span>
                    <span>UPLOAD DATE</span>
                    <hr />
                    <div>{this.props.data.upload_date_youtube}</div>
                    <span>VIEWS</span>
                    <hr />
                    <div className="views-number">{this.props.data.views.toLocaleString("en-En")}</div>
                </div>
            )
        }
        return (
            <div id="modal2" className="modal modal-fixed-footer">
                <div className="modal-album">
                    <span className="modal-album-label">ALBUM: </span>
                    <span>"{this.props.data.album}"</span>
                </div>
                <div className="modal-nav">
                    <div className="modal-color-picker-background">
                        <label id="color-picker-label">BACKGROUND:</label>
                        <input onChange={(e) => this.changeColor(e)} value={this.state.backgroundColor} type="color" id="background"/>
                    </div>
                    <div className="modal-color-picker-title">
                        <label id="color-picker-label">TITLE:</label>
                        <input onChange={(e) => this.changeColor(e)} value={this.state.titleColor} type="color" id="title"/>
                    </div>
                </div>
                {videoInfo}
                <div className="modal-content color-selection">
                        {featured}
                        <div className="description-tooltip">
                            {this.props.data.description}
                        </div>
                </div>
                <div className="modal-footer">
                    <div className="modal-footer-left">
                        <div><span>UPLOADED:</span> {this.props.data.upload_date}</div>
                        <div><span>TAKEN:</span> {this.props.data.taken_date}</div>
                        <div><span>CRED:</span> {this.props.data.photo_cred}</div>
                    </div>
                    <div className="modal-footer-title">
                        <span>{this.props.data.title}</span>
                    </div>
                    <div className="modal-close-button-div">
                        <button onClick={() => this.resetColors()} className="modal-close btn-flat">Close</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Modal;