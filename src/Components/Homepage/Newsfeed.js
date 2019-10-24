import React, { Component } from 'react';
import './Newsfeed.css';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import updateAction from '../../actions/updateAction';
import removeAction from '../../actions/removeAction';
import axios from 'axios';
import base64 from 'react-native-base64';
import concert from './Media/images/concert.jpg';
import houston from './Media/images/houston.jpeg';
import beach from './Media/images/beach.JPG';

class Newsfeed extends Component {
    state = {
        data: [],
        post: '',
        postb64: '',
        where: '',
        whereb64: '',
        whom: '',
        whomb64: '',
        when: '',
        whenb64: '',
        update: 'newsfeed',
        user_id: localStorage.getItem('user_id'),
        user_email: localStorage.getItem('user_email')
    };

    getData() {
        const apiURL = `https://still-falls-16479.herokuapp.com/users/components/?id=${this.state.user_id}&type=newsfeed`;
        const res = axios.get(apiURL);
        return res;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.updatedData !== this.props.updatedData) {
            this.setState({
                data: this.props.updatedData,
                post: '',
                postb64: '',
                where: '',
                whereb64: '',
                whom: '',
                whomb64: '',
                when: '',
                whenb64: '',
            })
        }
    }

    componentDidMount() {
        window.M.AutoInit();
        var options = {
            accordion: false
        }
        var elem = document.querySelector('.collapsible.expandable');
        // eslint-disable-next-line
        var instance = window.M.Collapsible.init(elem, options);

        const res = this.getData();
        res.then((response) => {
            this.setState({
                data: response.data
            })
        });
    }

    setId = (id) => {
        this.setState({
            id: id
        })
    }

    removePost = (e) => {
        const deleteData = { id: this.state.id, user_id: this.state.user_id, update: this.state.update }
        this.props.removeAction(deleteData);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {...this.state};
        this.props.updateAction(data);
    }

    changePost = (e) => {
        this.setState({
            post: e.target.value,
            postb64: base64.encode(e.target.value)
        })
    }

    changeWhere = (e) => {
        this.setState({
            where: e.target.value,
            whereb64: base64.encode(e.target.value)
        })
    }

    changeWith = (e) => {
        this.setState({
            whom: e.target.value,
            whomb64: base64.encode(e.target.value)
        })
    }

    changeWhen = (e) => {
        this.setState({
            when: e.target.value,
            whenb64: base64.encode(e.target.value)
        })
    }

    render() {
        const arrayLength = this.state.data.length;
        const newsfeedArray = this.state.data.map((entry, i) => {
            let image;
            let date;
            let time;
            if (entry.id === 1) {
                image = concert;
                date = "Yesterday";
                time = "9:24am";
            } else if (entry.id === 2) {
                image = houston;
                date = "Yesterday";
                time = "3:47pm";
            } else {
                image = beach;
                date = "Oct 20, 2019";
                time = "10:23pm";
            }
            if (i + 1 === arrayLength) {
                return (
                    <div className="row-newsfeed-posts hoverable last-post" key={i}>
                        <i onClick={() => this.setId(entry.id)} data-target="modal1" className="material-icons delete-post modal-trigger" id={entry.id}>delete</i>
                        <div className="row-newsfeed-posts-left-col">
                            <div className="newsfeed-timestamp-container">
                                <i className="material-icons newsfeed-timestamp">access_time</i>
                                {date}<br/>{time}
                            </div>
                            <img width="auto" height="100%" src={image} alt="" />
                            <i className="material-icons newsfeed-menu">more_horiz</i>
                        </div>
                        <div className="row-newsfeed-posts-right-col">
                            <div className="row-newsfeed-posts-right-col-info-row">
                                <div>
                                    <i className="material-icons">place</i>
                                    <div>{entry.where_at}</div>
                                </div>
                                <div>
                                    <i className="material-icons">group</i>
                                    <div>{entry.with_whom}</div>
                                </div>
                                <div>
                                    <i className="material-icons">timeline</i>
                                    <div>{entry.timestamp_option}</div>
                                </div>
                            </div>
                            <div className="row-newsfeed-entry">{entry.post}</div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div onClick={() => this.setId(entry.id)} className="row-newsfeed-posts hoverable" key={i}>
                        <i data-target="modal1" className="material-icons delete-post modal-trigger" id={entry.id}>delete</i>
                        <div className="row-newsfeed-posts-left-col">
                            <div className="newsfeed-timestamp-container">
                                <i className="material-icons newsfeed-timestamp">access_time</i>
                                {date}<br/>{time}
                            </div>
                            <img width="auto" height="100%" src={image} alt="" />
                            <i className="material-icons newsfeed-menu">more_horiz</i>
                        </div>
                        <div className="row-newsfeed-posts-right-col">
                            <div className="row-newsfeed-posts-right-col-info-row">
                                <div>
                                    <i className="material-icons">place</i>
                                    <div>{entry.where_at}</div>
                                </div>
                                <div>
                                    <i className="material-icons">group</i>
                                    <div>{entry.with_whom}</div>
                                </div>
                                <div>
                                    <i className="material-icons">timeline</i>
                                    <div>{entry.timestamp_option}</div>
                                </div>
                            </div>
                            <div className="row-newsfeed-entry">{entry.post}</div>
                        </div>
                    </div>
                )
            }
        })
        return (
            <div className="homepage-main-container">
                <div className="newsfeed-flex-container">
                    <ul className="collapsible expandable">
                        <li>
                            <div className="add-post collapsible-header"><i className="material-icons">add</i>Add Post</div>
                            <div className="add-post collapsible-body">
                                <form className="add-post-flex-container" onSubmit={this.handleSubmit}>
                                    <div className="add-post-textarea">
                                        <textarea onChange={this.changePost} value={this.state.post} placeholder="Share to your connections..."></textarea>
                                    </div>
                                    <div className="text-inputs">
                                        <input onChange={this.changeWhere} className="browser-default" value={this.state.where} type="text" placeholder="Where did this take place..." />
                                        <input onChange={this.changeWith} className="browser-default" value={this.state.whom} type="text" placeholder="Who to include in your post..." />
                                        <input onChange={this.changeWhen} className="browser-default" value={this.state.when} type="text" placeholder="Leave a timestamp..." />
                                    </div>
                                    <button className="btn-flat" type="submit">post</button>
                                </form>
                            </div>
                        </li>
                        <li>
                            <div className="favorites-post collapsible-header"><i className="material-icons">favorite</i>Favorites</div>
                            <div className="favorites-post collapsible-body">
                                <div className="favorites-post-flex-container">
                                    Nothing here yet!
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="settings-post collapsible-header"><i className="material-icons">settings</i>Settings</div>
                            <div className="settings-post collapsible-body">
                            <div className="settings-post-flex-container">
                                    Settings coming soon.
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="main-container-newsfeed-posts">
                        {newsfeedArray}
                    </div>
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h3>WARNING</h3>
                        <p>Once completed, this action cannot be undone.</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => this.removePost()} className="modal-close waves-effect waves-light btn-flat">CONTINUE</button>
                        <button className="modal-close waves-effect waves-light btn-flat">CANCEL</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        updatedData: state.update
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
        updateAction,
        removeAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);