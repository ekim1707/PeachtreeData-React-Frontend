import React, { Component } from 'react';
import './Places.css';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.6/node_modules/redux';

class Places extends Component {
    state = {};

    componentDidUpdate() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="homepage-main-container">
                <h1>Sanity Check places</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        placesData: state
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);