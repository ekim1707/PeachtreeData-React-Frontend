import React, { Component } from 'react';
import './QuoteBook.css';

class All extends Component {
    state = {};

    componentDidUpdate() {

    }

    componentDidMount() {

    }

    render() {
        const fullList = this.props.data.quotebook.map((entry, i) => {
            // let style;
            // if(quote.origin === 'unknown') {
            //     style = {
            //         color: "red"
            //     }
            // } else {
            //     style = {
            //         color: "black"
            //     }
            // }
            // if (entry.type === 'quote')...
            return (
                <div className="row-quotes" key={i}>
                    <div>"{entry.quote}"</div>
                    <div>{entry.origin}</div>
                    <div>{entry.date}</div>
                    <div>{entry.significance}</div>
                </div>
            )
        })
        return (
                <div className="main-container-quotes">
                    {fullList}
                </div>
        )
    }
}

export default All;