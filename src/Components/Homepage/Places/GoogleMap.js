import React, { Component, createRef } from 'react';
// import { googleApiKey } from '../../config';


class GoogleMap extends Component {
  state = {
    search: ''
  }

  googleMapRef = createRef()

  componentDidMount() {
    const googleMapScript = document.createElement('script');

    // to put in config.js file later:
    const googleApiKey = `AIzaSyBdp6GPcFTaZhBI1u8c4uAlukWmUicFzcE`;
    // 

    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', ()=>{
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
    });
  }

  createGoogleMap = () => {
    return(
      new window.google.maps.Map(this.googleMapRef.current, {
        zoom: 16,
        center: {
          lat: 34.0289,
          lng: -84.1986,
        }
      })
    )
  }

  createMarker = () => {
    return(
      new window.google.maps.Marker({
        position: { lat: 34.0289, lng: -84.1986 },
        map: this.googleMap,
      })
    )
  }

  mapSearchControl = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleExpand(expand) {
    if (expand === 'less') {
      document.querySelector('.closed').classList.add('hidden');
      document.querySelector('.open').classList.remove('hidden');
      document.getElementById('google-map').classList.remove('hidden');
    } else {
      document.querySelector('.closed').classList.remove('hidden');
      document.querySelector('.open').classList.add('hidden');
      document.getElementById('google-map').classList.add('hidden');
    }
  }

  render() {
    return (
      <div className="google-map-box">
        <div className="search closed">
          <span onClick={() => this.handleExpand('less')} id="expand_label">Google Map Search</span>
          <i onClick={() => this.handleExpand('less')} className="material-icons expand-toggle" id="expand_less">expand_less</i>
        </div>
        <div className="search open hidden">
          <input onChange={this.mapSearchControl} value={this.state.search} className="browser-default map-search" type="text" placeholder="Search for places..."></input>
          <i className="material-icons dropdown-trigger" data-target="dropdown1">add</i>
          <i onClick={() => this.handleExpand('more')} className="material-icons expand-toggle" id="expand_more">expand_more</i>
        </div>
        <div
          className="hidden"
          id="google-map"
          ref={this.googleMapRef}
          style={{ width: '400px', height: '300px' }}
        />
        <ul id='dropdown1' className='dropdown-content'>
          <li>Restaurants</li>
          <li>Atlanta Hangouts</li>
          <li>Meeting Locations</li>
          <li className="divider" tabIndex="-1"></li>
          <li><i className="material-icons">watch_later</i>Watch List</li>
          <li><i className="material-icons">favorite</i>Favorites</li>
        </ul>
      </div>
    )
  }
}

export default GoogleMap;