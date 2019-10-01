import React, { Component } from 'react';
import './QuoteBook.css';

class Quotes extends Component {
    state = {};

    componentDidUpdate() {

    }

    componentDidMount() {

    }

    render() {
        // console.log(this.props.data);
        // console.log('hi');
        // const quoteList = this.props.data.quotes.map((quote) => {
        //     let style;
        //     if(quote.origin === 'unknown') {
        //         style = {
        //             color: "red"
        //         }
        //     } else {
        //         style = {
        //             color: "black"
        //         }
        //     }
        //     return (
        //         <div>
        //             <h1>"{quote.quote}"</h1>
        //             <h3 style={style}>{quote.origin}</h3>
        //         </div>
        //     )
        // })
        return (
                <h1>Sanity Check quotes</h1>
        )
    }
}

export default Quotes;