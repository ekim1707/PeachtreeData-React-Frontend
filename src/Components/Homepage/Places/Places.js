import React, { Component } from 'react';
import './Places.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMap from './GoogleMap';

class Places extends Component {
    state = {};

    componentDidUpdate() {

    }

    componentDidMount() {
        window.M.AutoInit();
        var elems = document.querySelectorAll('.fixed-action-btn');
        // eslint-disable-next-line
        var instances = window.M.FloatingActionButton.init(elems, {
          direction: 'bottom'
        });
    }

    render() {
        return (
            <div className="homepage-main-container places">
                <div className="fixed-action-btn">
                    <button className="btn-floating btn-large orange">
                        <i className="large material-icons">fiber_manual_record</i>
                    </button>
                    <ul>
                        <li><button className="btn-floating red"><i className="material-icons">favorite</i></button></li>
                        <li><button className="btn-floating yellow darken-1"><i className="material-icons">watch_later</i></button></li>
                        <li><button className="btn-floating green"><i className="material-icons">group</i></button></li>
                        <li><button className="btn-floating blue"><i className="material-icons">format_list_bulleted</i></button></li>
                    </ul>
                </div>
                <GoogleMap />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        updatedData: state
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);