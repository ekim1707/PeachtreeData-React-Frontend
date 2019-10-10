import React from 'react';
import './NavBar.css';

// const styles = {

// }

function HomepageNavBar(props){
    return(
        <div className="homepage-filter-bar">
            <div className="homepage-welcome">
                Welcome, {props.data.first_name}!
            </div>
            <div className="datepicker">
                Start Date
                <input className="browser-default" type="date" id="datepicker"/>
                End Date
                <input className="browser-default" type="date" id="datepicker"/>
            </div>
        </div>
    )
}

export default HomepageNavBar;