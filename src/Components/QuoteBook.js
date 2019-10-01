import React, { Component } from 'react';
import './QuoteBook.css';
import { Route } from 'react-router-dom';
import All from './All';
import Quotes from './Quotes';
import Lyrics from './Lyrics';

class QuoteBook extends Component {
    state = {};

    componentDidUpdate() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="homepage-main-container">
                <Route exact path="/users/homepage/quotebook" render={(props) => {
                    return <All history={props.history} data={this.props.data} />
                }} />
                <Route path="/users/homepage/quotebook/quotes" render={(props) => {
                    return <Quotes history={props.history} data={this.props.data} />
                }} />
                <Route path="/users/homepage/quotebook/lyrics" render={(props) => {
                    return <Lyrics history={props.history} data={this.props.data} />
                }} />
        {/* <div className="quote-nav">
            <div className="quote-links-wrapper">
                <NavLink to="/users/homepage/quotebook/" className="quote-links">All</NavLink>
                <NavLink to="/users/homepage/quotebook/quotes" className="quote-links">Quotes</NavLink>
                <NavLink to="/users/homepage/quotebook/lyrics" className="quote-links">Lyrics</NavLink>
            </div>
            <input type="text" className="quote-search browser-default" placeholder="search"/>
        </div> */}
            </div>
        )
    }
}

export default QuoteBook;