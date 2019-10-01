import React, { Component } from 'react';
import data from '../data';
import { Route, NavLink } from 'react-router-dom';
import './Homepage.css';
import Newsfeed from './Newsfeed';
import Connections from './Connections';
import Media from './Media';
import Places from './Places';
import QuoteBook from './QuoteBook';
import FreeWrite from './FreeWrite';
import Timeline from './Timeline';
import HomepageNavBar from '../NavBar/HomepageNavBar';

class Homepage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        // fetch APIs/data here
    }

    render() {
        return(
            <div className="homepage-container">
                <Route path="/users/homepage" render={(props) => {
                    return <HomepageNavBar history={props.history} data={data[0]} />
                }} />
                <div className="homepage-body-container">
                    <div className="homepage-navbar">
                        <NavLink to="/users/homepage/newsfeed" className="homepage-nav-labels" id="nav-home">
                            <i className="material-icons prefix nav-icons">home</i>
                            Newsfeed
                        </NavLink>
                        <NavLink to="/users/homepage/connections" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">group</i>
                            Connections
                        </NavLink>
                        <NavLink to="/users/homepage/media" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">perm_media</i>  
                            Media
                        </NavLink>
                        <NavLink to="/users/homepage/places" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">pin_drop</i>
                            Places
                        </NavLink>
                        <NavLink to="/users/homepage/quotebook" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">format_quote</i>
                            Quotes/Lyrics
                        </NavLink>
                        <NavLink to="/users/homepage/freewrite" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">create</i>
                            FreeWrite
                        </NavLink>
                        <NavLink to="/users/homepage/timeline" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">timeline</i>
                            Timeline
                        </NavLink>
                        <hr className="homepage-navbar-hr"/>
                    </div>
                        <Route exact path="/users/homepage/newsfeed" render={(props) => {
                            return <Newsfeed history={props.history} data={data[0]} key="newsfeed" />
                        }} />
                        <Route exact path="/users/homepage/connections" render={(props) => {
                            return <Connections history={props.history} data={data[0]} key="connections" />
                        }} />
                        <Route exact path="/users/homepage/media" render={(props) => {
                            return <Media history={props.history} data={data[0]} key="media" />
                        }} />
                        <Route exact path="/users/homepage/places" render={(props) => {
                            return <Places history={props.history} data={data[0]} key="places" />
                        }} />
                        <Route exact path="/users/homepage/quotebook" render={(props) => {
                            return <QuoteBook history={props.history} data={data[0]} key="quotes" />
                        }} />
                        <Route exact path="/users/homepage/freewrite" render={(props) => {
                            return <FreeWrite history={props.history} data={data[0]} key="freewrite" />
                        }} />
                        <Route exact path="/users/homepage/timeline" render={(props) => {
                            return <Timeline history={props.history} data={data[0]} key="timeline" />
                        }} />
                </div>
            </div>
        )
    }
}

export default Homepage;