import React, { Component } from 'react';
import './FreeWrite.css';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.6/node_modules/redux';

class FreeWrite extends Component {
    state = {};

    componentDidUpdate() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="homepage-main-container">
                <h1>Sanity Check freewrite</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        freewriteData: state
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FreeWrite);