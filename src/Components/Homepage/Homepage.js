import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Homepage.css';
import Newsfeed from './Newsfeed';
import Connections from './Connections/Connections';
import Media from './Media/Media';
import Places from './Places/Places';
import QuoteBook from './QuoteBook';
import FreeWrite from './FreeWrite/FreeWrite';
import Settings from './Settings';
import Feedback from './Feedback';
import HomepageNavBar from '../NavBar/HomepageNavBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Charles from './Connections/images/cortez.jpeg';
import Danny from './Connections/images/danny.jpg';
import Gloria from './Connections/images/gloria.jpg';
import JonJoe from './Connections/images/jonjoe.jpeg';
import Minje from './Connections/images/minje.jpg';
import Noona from './Connections/images/noona.jpg';
import Pailyn from './Connections/images/pailyn.jpg';
import Rowena from './Connections/images/rowena.jpg';
import Sangho from './Connections/images/sangho.jpg';
import Tai from './Connections/images/tai.jpg';
import Tiffany from './Connections/images/tiffany.jpg';

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            msgData: [],
            user_id: localStorage.getItem('user_id'),
            user_email: localStorage.getItem('user_email')
        }
    }

    sortData(data) {
        const sortedData = data.sort((a, b) => {
            if ((a.last_name.localeCompare(b.last_name) === 0)) {
                if ((a.first_name.localeCompare(b.first_name) === 0)) {
                    return a.id.localeCompare(b.id);
                }
                return a.first_name.localeCompare(b.first_name);
            }
            return a.last_name.localeCompare(b.last_name);
        })
        return sortedData;
    }

    componentDidMount() {
        const apiURL = `https://still-falls-16479.herokuapp.com/users/?email=${this.state.user_email}`;
        const res = axios.get(apiURL);
        res.then((response) => {
            this.setState({
                data: response.data
            })
        })
        const msgApiURL = `https://still-falls-16479.herokuapp.com/users/connections`;
        const msgRes = axios.get(msgApiURL);
        msgRes.then((response) => {
            const userList = response.data.filter((data) => {
                if (data.users_id === parseInt(this.state.user_id)) {
                    return true
                }
                return false
            });
            this.setState({
                msgData: this.sortData(userList)
            })
        })
    }

    render() {
        const onlineFilter = this.state.msgData.filter(connection => connection.available);
        let msgImages;
        if (onlineFilter.length > 0) {
            msgImages = onlineFilter.map((connection, i) => {
                let image;
                if (connection.first_name === 'Charles') {
                    image = Charles
                } else if (connection.first_name === 'Danny') {
                    image = Danny
                } else if (connection.first_name === 'Gloria') {
                    image = Gloria
                } else if (connection.first_name === 'Jonathan') {
                    image = JonJoe
                } else if (connection.first_name === 'Hyeuryun') {
                    image = Noona
                } else if (connection.first_name === 'Minje') {
                    image = Minje
                } else if (connection.first_name === 'Pailyn') {
                    image = Pailyn
                } else if (connection.first_name === 'Rowena') {
                    image = Rowena
                } else if (connection.first_name === 'Sangho') {
                    image = Sangho
                } else if (connection.first_name === 'Tai') {
                    image = Tai
                } else if (connection.first_name === 'Tiffany') {
                    image = Tiffany
                }
                return (
                    <div className="homepage-navbar-messenger-row" key={i}>
                        <img src={image} className="homepage-navbar-messenger-image" alt="" />
                        <span className="homepage-navbar-messenger-name">
                            {connection.first_name} {connection.last_name}
                        </span>
                        <i className="tiny material-icons">fiber_manual_record</i>
                    </div>
                )
            });
        } else {
            msgImages = <div className="messenger-searching-message">Searching...</div>
        }
        return(
            <div className="homepage-container">
                <Route path="/users/homepage" render={(props) => {
                    return <HomepageNavBar history={props.history} data={this.state.data} />
                }} />
                <div className="homepage-body-container">
                    <div className="homepage-navbar">
                        <NavLink exact to="/users/homepage/" className="homepage-nav-labels" id="nav-home">
                            <i className="material-icons prefix nav-icons">home</i>
                            Newsfeed
                        </NavLink>
                        <NavLink to="/users/homepage/connections" className="homepage-nav-labels" id="connections-control-click">
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
                            Quotes
                        </NavLink>
                        <NavLink to="/users/homepage/freewrite" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">create</i>
                            FreeWrite
                        </NavLink>
                        {/* <NavLink to="/users/homepage/timeline" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">timeline</i>
                            Timeline
                        </NavLink> */}
                        <hr className="homepage-navbar-hr"/>
                        <span className="homepage-navbar-messenger-title">CURRENTLY ONLINE</span>
                        <div className="homepage-navbar-messenger">
                            {msgImages}
                        </div>
                        <hr className="homepage-navbar-hr"/>
                        <NavLink to="/users/homepage/settings" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">settings</i>
                            Settings
                        </NavLink>
                        <NavLink to="/users/homepage/feedback" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">feedback</i>
                            Report Issues
                        </NavLink>
                        <NavLink to="/help" className="homepage-nav-labels">
                            <i className="material-icons prefix nav-icons">help</i>
                            Customer Support
                        </NavLink>
                        <hr className="homepage-navbar-hr"/>
                        <div className="homepage-navbar-copyright-area">
                            <div className="homepage-navbar-copyright-area-buttons">
                                <NavLink to="/about" className="homepage-bottom-nav-labels">About</NavLink>
                                <span>Advertise</span>
                                <span>Copyright</span>
                            </div>
                            © 2019 PeachtreeData, LLC
                        </div>
                    </div>
                    <Route exact path="/users/homepage/" render={(props) => {
                        return <Newsfeed history={props.history} key="newsfeed" />
                    }} />
                    <Route exact path="/users/homepage/connections" render={(props) => {
                        return <Connections history={props.history} key="connections" />
                    }} />
                    <Route exact path="/users/homepage/media" render={(props) => {
                        return <Media history={props.history} key="media" />
                    }} />
                    <Route exact path="/users/homepage/places" render={(props) => {
                        return <Places history={props.history} key="places" />
                    }} />
                    <Route exact path="/users/homepage/quotebook" render={(props) => {
                        return <QuoteBook history={props.history} key="quotes" />
                    }} />
                    <Route exact path="/users/homepage/freewrite" render={(props) => {
                        return <FreeWrite history={props.history} key="freewrite" />
                    }} />
                    {/* <Route exact path="/users/homepage/timeline" render={(props) => {
                        return <Timeline history={props.history} key="timeline" />
                    }} /> */}
                    <Route exact path="/users/homepage/settings" render={(props) => {
                        return <Settings history={props.history} key="settings" />
                    }} />
                    <Route exact path="/users/homepage/feedback" render={(props) => {
                        return <Feedback history={props.history} key="feedback" />
                    }} />              
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        loggedIn: state.auth
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
        
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);