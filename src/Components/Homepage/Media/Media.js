import React, { Component } from 'react';
import './Media.css';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import hardData from './data';
import CardSet from './CardSet';
import Modal from './Modal';

class Media extends Component {
    state = {
        data: hardData.filter(data => data.image),
        modalData: [],
        album: 0
    };

    componentDidMount() {
        window.M.AutoInit();
    }

    categorySelector = (e) => {
        const el = e.target;

        if (!document.querySelector('.album-select').classList.contains('hidden')) {
            document.querySelector('.album-select').classList.add('hidden')
        }

        if (el.classList.contains('media-select-full')) {
            if (document.querySelector('.media-select-full').firstElementChild.classList.contains('hidden')) {
                document.querySelectorAll('.first-toggle').forEach((toggle) => {
                    if (toggle.classList.contains('hidden')) {
                        toggle.classList.remove('hidden');
                    } else {
                        toggle.classList.add('hidden');
                    }
                })
            }
            if (document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                this.setState({
                    data: []
                })
            } else if (document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && !document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                const videosOnly = hardData.filter(data => data.embed);
                this.setState({
                    data: videosOnly
                })
            } else if (!document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                const imagesOnly = hardData.filter(data => data.image);
                this.setState({
                    data: imagesOnly
                })
            } else if (!document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && !document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                this.setState({
                    data: hardData
                })
            }
        } else if (el.classList.contains('media-select-album')) {
            document.querySelector('.album-select').classList.remove('hidden');
            if (document.querySelector('.media-select-album').firstElementChild.classList.contains('hidden')) {
                document.querySelectorAll('.first-toggle').forEach((toggle) => {
                    if (toggle.classList.contains('hidden')) {
                        toggle.classList.remove('hidden');
                    } else {
                        toggle.classList.add('hidden');
                    }
                })
            }
        }
    }

    selectAlbum = (e) => {
        if (document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
            this.setState({
                data: []
            })
        } else if (document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && !document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
            const videosOnly = hardData.filter(data => data.embed);
            const albumVideos = videosOnly.filter(video => video.album === e.target.value);
            this.setState({
                data: albumVideos
            })
        } else if (!document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
            const imagesOnly = hardData.filter(data => data.image);
            const albumImages = imagesOnly.filter(images => images.album === e.target.value);
            this.setState({
                data: albumImages
            })
        } else if (!document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && !document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
            const albumAll = hardData.filter(data => data.album === e.target.value)
            this.setState({
                data: albumAll
            })
        }
        this.setState({
            album: e.target.value
        })
    }

    typeSelector = (e) => {
        const el = e.target;

        if (el.classList.contains('media-select-photos')) {
            document.querySelectorAll('.image-select-boxes').forEach((box) => {
                if (box.classList.contains('hidden')) {
                    box.classList.remove('hidden');
                } else {
                    box.classList.add('hidden');
                }
            })
        } else if (el.classList.contains('media-select-videos')) {
            document.querySelectorAll('.video-select-boxes').forEach((box) => {
                if (box.classList.contains('hidden')) {
                    box.classList.remove('hidden');
                } else {
                    box.classList.add('hidden');
                }
            })
        }
        if (document.querySelector('.media-select-full').firstElementChild.classList.contains('hidden')) {
            if (document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                this.setState({
                    data: []
                })
            } else if (document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && !document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                const videosOnly = hardData.filter(data => data.embed);
                const albumVideos = videosOnly.filter(video => video.album === this.state.album);
                this.setState({
                    data: albumVideos
                })
            } else if (!document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                const imagesOnly = hardData.filter(data => data.image);
                const albumImages = imagesOnly.filter(images => images.album === this.state.album);
                this.setState({
                    data: albumImages
                })
            } else if (!document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && !document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                const albumAll = hardData.filter(data => data.album === this.state.album)
                this.setState({
                    data: albumAll
                })
            }
        } else {
            if (document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                this.setState({
                    data: []
                })
            } else if (document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && !document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                const videosOnly = hardData.filter(data => data.embed);
                this.setState({
                    data: videosOnly
                })
            } else if (!document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                const imagesOnly = hardData.filter(data => data.image);
                this.setState({
                    data: imagesOnly
                })
            } else if (!document.querySelector('.image-icons-div').firstElementChild.classList.contains('hidden') && !document.querySelector('.video-icons-div').firstElementChild.classList.contains('hidden')) {
                this.setState({
                    data: hardData
                })
            }
        }
    }

    modalTrigger = (id) => {
        const filteredData = hardData[id - 1];
        let modalData;
        if (filteredData.image) {
            modalData = {
                id: filteredData.id,
                image: filteredData.image,
                upload_date: filteredData.upload_date,
                title: filteredData.title,
                description: filteredData.description,
                photo_cred: filteredData.photo_cred,
                taken_date: filteredData.taken_date,
                album: filteredData.album.toUpperCase()
            }
        } else {
            modalData = {
                id: filteredData.id,
                embed: filteredData.embed,
                upload_date: filteredData.upload_date,
                upload_date_youtube: filteredData.upload_date_youtube,
                title: filteredData.title,
                description: filteredData.description,
                music: filteredData.music,
                photo_cred: filteredData.photo_cred,
                taken_date: filteredData.taken_date,
                views: filteredData.views,
                album: filteredData.album.toUpperCase()
            }
        }
        this.setState({
            modalData: modalData
        })
    }

    fileUpload = (e) => {
        if (document.querySelector('.upload-div').classList.contains('hidden')) {
            document.querySelector('.upload-div').classList.remove('hidden');
        } else {
            document.querySelector('.upload-div').classList.add('hidden');
        }
    }

    render() {
        return (
            <div className="homepage-main-container mediapage">
                <div className="button-navbar-mediapage">
                    <div className="media-nav-first-toggle">
                        <div onClick={(e) => this.categorySelector(e)} className="media-select-full">
                            FULL GALLERY: 
                            <i className="material-icons first-toggle">radio_button_checked</i>
                            <i className="material-icons first-toggle hidden">radio_button_unchecked</i>
                        </div>
                        <div onClick={(e) => this.categorySelector(e)} className="media-select-album">
                            BY ALBUM: 
                            <i className="material-icons first-toggle hidden">radio_button_checked</i>
                            <i className="material-icons first-toggle">radio_button_unchecked</i>
                        </div>
                        <div className="album-select hidden">
                            <select onChange={this.selectAlbum} value={this.state.album} className="browser-default" id="myselect1">
                                <option value="0" disabled>Choose your album</option>
                                <option value="Highschool">Highschool</option>
                                <option value="College">College</option>
                                <option value="Tiffany/Family">Tiffany/Family</option>
                                <option value="Random">Random</option>
                            </select>
                        </div>
                    </div>
                    <div className="media-nav-second-toggle">
                        <div onClick={(e) => this.typeSelector(e)} className="media-select-photos">
                            PHOTOS: 
                            <div className="image-icons-div">
                                <i className="material-icons image-select-boxes">check_box</i>
                                <i className="material-icons image-select-boxes hidden">check_box_outline_blank</i>
                            </div>
                        </div>
                        <div onClick={(e) => this.typeSelector(e)} className="media-select-videos">
                            VIDEOS: 
                            <div className="video-icons-div">
                                <i className="material-icons video-select-boxes hidden">check_box</i>
                                <i className="material-icons video-select-boxes">check_box_outline_blank</i>
                            </div>
                        </div>
                    </div>
                    <div className="media-nav-buttons">
                        <button onClick={this.fileUpload} className="media-file-upload btn-floating hoverable" >
                            <i className="material-icons">file_upload</i>
                        </button>
                    </div>
                </div>
                <CardSet modalTrigger={this.modalTrigger} data={this.state.data} />
                <Modal data={this.state.modalData} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);