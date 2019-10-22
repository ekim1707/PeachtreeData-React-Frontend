import React from 'react';
import { NavLink } from 'react-router-dom';

function Help() {
    return(
        <div className="help">
            <div className="help-nav">
                <div className="help-nav-toc">
                    Table of Contents
                </div>
                <ul>
                    <a href="#how">
                        How to use the app
                    </a>
                    <li>
                        <a href="#make-account">
                            Making an account
                        </a>
                    </li>
                    <li>
                        <a href="#logging-in">
                            Logging in
                        </a>
                    </li>
                    <li>
                        <a href="#connecting">
                            Connecting with other users
                        </a>
                    </li>
                    <li>
                        <a href="#posts">
                            Making/removing posts
                        </a>
                    </li>
                    <a href="#settings">
                        Settings
                    </a>
                    <li>
                        <a href="#privacy">
                            Privacy settings
                        </a>
                    </li>
                    <li>
                        <a href="#communication">
                            Communication settings
                        </a>
                    </li>
                </ul>
                <div className="homepage-navbar-copyright-area">
                    <div className="homepage-navbar-copyright-area-buttons">
                        <NavLink to="/about" className="homepage-bottom-nav-labels">About</NavLink>
                        <span>Advertise</span>
                        <span>Copyright</span>
                    </div>
                    © 2019 PeachtreeData, LLC
                </div>
            </div>
            <div className="help-body">
                <h4 id="how">
                    How to use the app
                </h4>
                <h6 id="make-account">
                    Making an account
                </h6>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Metus dictum at tempor commodo ullamcorper a lacus. At volutpat diam ut venenatis. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Sit amet volutpat consequat mauris nunc congue nisi vitae. Lectus urna duis convallis convallis tellus. Vulputate mi sit amet mauris. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Lobortis mattis aliquam faucibus purus in massa tempor nec. Diam in arcu cursus euismod quis. Ac turpis egestas integer eget aliquet nibh praesent. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Elementum eu facilisis sed odio morbi quis commodo.
                </div>
                <h6 id="logging-in">
                    Logging in
                </h6>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla pharetra diam sit amet nisl. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Fusce ut placerat orci nulla pellentesque dignissim. Scelerisque varius morbi enim nunc faucibus a pellentesque. Cras tincidunt lobortis feugiat vivamus at augue eget. Dui ut ornare lectus sit amet est placerat in. Pellentesque diam volutpat commodo sed egestas egestas. Laoreet sit amet cursus sit.
                </div>
                <h6 id="connecting">
                    Connecting with other users
                </h6>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla pharetra diam sit amet nisl. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Fusce ut placerat orci nulla pellentesque dignissim. Scelerisque varius morbi enim nunc faucibus a pellentesque. Cras tincidunt lobortis feugiat vivamus at augue eget. Dui ut ornare lectus sit amet est placerat in. Pellentesque diam volutpat commodo sed egestas egestas. Laoreet sit amet cursus sit.
                </div>
                <h6 id="posts">
                    Making/removing posts
                </h6>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla pharetra diam sit amet nisl. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Fusce ut placerat orci nulla pellentesque dignissim. Scelerisque varius morbi enim nunc faucibus a pellentesque. Cras tincidunt lobortis feugiat vivamus at augue eget. Dui ut ornare lectus sit amet est placerat in. Pellentesque diam volutpat commodo sed egestas egestas. Laoreet sit amet cursus sit.
                </div>
                <h4 id="settings">
                    Settings
                </h4>
                <h6 id="privacy">
                    Privacy settings
                </h6>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla pharetra diam sit amet nisl. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Fusce ut placerat orci nulla pellentesque dignissim. Scelerisque varius morbi enim nunc faucibus a pellentesque. Cras tincidunt lobortis feugiat vivamus at augue eget. Dui ut ornare lectus sit amet est placerat in. Pellentesque diam volutpat commodo sed egestas egestas. Laoreet sit amet cursus sit.
                </div>
                <h6 id="communication">
                    Communication settings
                </h6>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nulla pharetra diam sit amet nisl. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Fusce ut placerat orci nulla pellentesque dignissim. Scelerisque varius morbi enim nunc faucibus a pellentesque. Cras tincidunt lobortis feugiat vivamus at augue eget. Dui ut ornare lectus sit amet est placerat in. Pellentesque diam volutpat commodo sed egestas egestas. Laoreet sit amet cursus sit.
                </div>
            </div>
        </div>
    )
}

export default Help;