import React, { Component } from 'react';
import './Newsfeed.css';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import updateAction from '../../actions/updateAction';
import removeAction from '../../actions/removeAction';
import axios from 'axios';

class Newsfeed extends Component {
    state = {
        data: [],
        post: '',
        where: '',
        whom: '',
        when: '',
        update: 'newsfeed',
        user_id: 2
    };

    getData() {
        const apiURL = `${window.apiHost}/users/components/?id=${this.state.user_id}&type=newsfeed`;
        const res = axios.get(apiURL);
        return res;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.updatedData !== this.props.updatedData) {
            this.setState({
                data: this.props.updatedData,
                post: '',
                where: '',
                whom: '',
                when: '',
            })
        }
    }

    componentDidMount() {
        const controlClick = (e) => {

            const el = e.target;

            if (el.classList.contains('delete-post') === true) {
                this.setState({
                    id: el.id
                })
            }

        }

        window.addEventListener('click', controlClick);

        window.M.AutoInit();
        var options = {
            accordion: false
        }
        var elem = document.querySelector('.collapsible.expandable');
        var instance = window.M.Collapsible.init(elem, options);

        const res = this.getData();
        res.then((response) => {
            this.setState({
                data: response.data
            })
        });
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
            post: e.target.value
        })
    }

    changeWhere = (e) => {
        this.setState({
            where: e.target.value
        })
    }

    changeWith = (e) => {
        this.setState({
            whom: e.target.value
        })
    }

    changeWhen = (e) => {
        this.setState({
            when: e.target.value
        })
    }

    render() {
        const arrayLength = this.state.data.length;
        const newsfeedArray = this.state.data.map((entry, i) => {
            if (i + 1 === arrayLength) {
                return (
                    <div className="row-newsfeed-posts hoverable last-post" key={i}>
                        <button data-target="modal1" className="btn delete-post modal-trigger" id={entry.id}><i className="material-icons delete-post" id={entry.id}>delete</i></button>
                        <div>{entry.post}</div>
                        <div>{entry.where_at}</div>
                        <div>{entry.with_whom}</div>
                        <div>{entry.timestamp_option}</div>
                    </div>
                )
            } else {
                return (
                    <div className="row-newsfeed-posts hoverable" key={i}>
                        <button data-target="modal1" className="btn delete-post modal-trigger" id={entry.id}><i className="material-icons delete-post" id={entry.id}>delete</i></button>
                        <div>{entry.post}</div>
                        <div>{entry.where_at}</div>
                        <div>{entry.with_whom}</div>
                        <div>{entry.timestamp_option}</div>
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
                                        <button className="btn-small" type="submit">post</button>
                                    </div>
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