import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

// const styles = {

// }

function NavBar(props){
    return(
        <nav>
            <div className="nav-wrapper">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpUTmoOLD_JnB4WOMWY1Srwf9I-pGprFmdgHoC8c-PuzlvpcsH' height="75%" width="auto" alt="" id="nav-image" />
                <input type="text" className="google-search browser-default" placeholder="Google Search"/>
                <ul id="nav-mobile" className="hide-on-med-and-down">
                    <li><NavLink to='/'>Logout</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;