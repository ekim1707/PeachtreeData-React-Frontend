import React, { Component } from 'react';
import './FreeWrite.css';
import updateAction from '../../../actions/updateAction';
import removeAction from '../../../actions/removeAction';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import axios from 'axios';
import base64 from 'react-native-base64';
import cork from './cork.jpg';
import pin from './pin.png';
import journal from './journal.jpg';

class FreeWrite extends Component {
    state = {
        data: [],
        title: '',
        titleb64: '',
        mood: '',
        moodb64: '',
        type: 'Notes',
        list: '',
        listb64: '',
        entry: '',
        entryb64: '',
        tags: '',
        tagsb64: '',
        id: '',
        update: 'freewrite',
        style: cork,
        container_contents: 'notepad',
        modalData: [],
        modalTitle: '',
        modalList: '',
        user_id: localStorage.getItem('user_id'),
        user_email: localStorage.getItem('user_email')
    };

    getData() {
        const apiURL = `https://still-falls-16479.herokuapp.com/users/components/?id=${this.state.user_id}&type=freewrite`;
        const res = axios.get(apiURL);
        return res;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.updatedData !== this.props.updatedData) {
            this.setState({
                data: this.props.updatedData,
                title: '',
                titleb64: '',
                mood: '',
                moodb64: '',
                type: 'Notes',
                list: '',
                listb64: '',
                entry: '',
                entryb64: '',
                tags: '',
                tagsb64: '',
            })
        }
    }

    componentDidMount() {
        window.M.AutoInit();
        const res = this.getData();
        res.then((response) => {
            this.setState({
                data: response.data
            })
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const postData = {...this.state};
        this.props.updateAction(postData);
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value,
            titleb64: base64.encode(e.target.value)
        })
    }

    changeMood = (e) => {
        this.setState({
            mood: e.target.value,
            moodb64: base64.encode(e.target.value)
        })
    }

    changeType = (e) => {
        if (e.target.value === "Notes") {
            if (document.querySelector('.note-lists').classList.contains('hidden')) {
                document.querySelector('.note-lists').classList.remove('hidden');
            }
            if (!document.querySelector('.input-mood').classList.contains('hidden')) {
                document.querySelector('.input-mood').classList.add('hidden');
            }
            this.handleCategory('notepad');
        } else {
            if (!document.querySelector('.note-lists').classList.contains('hidden')) {
                document.querySelector('.note-lists').classList.add('hidden');
            }
            if (document.querySelector('.input-mood').classList.contains('hidden')) {
                document.querySelector('.input-mood').classList.remove('hidden');
            }
            this.handleCategory('journal');
        }
        this.setState({
            type: e.target.value
        })
    }

    changeList = (e) => {
        this.setState({
            list: e.target.value,
            listb64: base64.encode(e.target.value)
        })
    }

    changeEntry = (e) => {
        this.setState({
            entry: e.target.value,
            entryb64: base64.encode(e.target.value)
        })
    }

    changeTags = (e) => {
        this.setState({
            tags: e.target.value,
            tagsb64: base64.encode(e.target.value)
        })
    }

    handleOpenClose = (toggle) => {
        if (toggle === 'open') {
            document.querySelectorAll('.freewrite-post-toggle').forEach((selector) => {
                if (selector.classList.contains('hidden')) {
                    selector.classList.remove('hidden');
                } else {
                    selector.classList.add('hidden');
                }
            });
            document.querySelector('.freewrite-left-half').style.opacity = "1";
            document.querySelector('.freewrite-left-half').style.width = "50%";
            document.querySelector('.freewrite-right-half').style.width = "50%";
            document.getElementById('fade-out').classList.remove('fade-out');
        } else {
            document.querySelectorAll('.freewrite-post-toggle').forEach((selector) => {
                if (selector.classList.contains('hidden')) {
                    selector.classList.remove('hidden');
                } else {
                    selector.classList.add('hidden');
                }
            });
            document.querySelector('.freewrite-left-half').style.opacity = "0";
            document.querySelector('.freewrite-left-half').style.width = "0";
            document.querySelector('.freewrite-right-half').style.width = "100%";
            document.getElementById('fade-out').classList.add('fade-out');
        }
    }
    
    handleCategory = (toggle) => {
        if (toggle === 'notepad') {
            if (!document.querySelector('.notepad-toggle').classList.contains('selected')) {
                document.querySelector('.notepad-toggle').classList.add('selected');
            }
            if (document.querySelector('.journal-toggle').classList.contains('selected')) {
                document.querySelector('.journal-toggle').classList.remove('selected');
            }
            if (document.querySelector('.note-lists').classList.contains('hidden')) {
                document.querySelector('.note-lists').classList.remove('hidden');
            }
            if (!document.querySelector('.input-mood').classList.contains('hidden')) {
                document.querySelector('.input-mood').classList.add('hidden');
            }
            this.setState({
                style: cork,
                container_contents: 'notepad',
                type: 'Notes'
            })
        } else {
            if (!document.querySelector('.journal-toggle').classList.contains('selected')) {
                document.querySelector('.journal-toggle').classList.add('selected');
            } 
            if (document.querySelector('.notepad-toggle').classList.contains('selected')) {
                document.querySelector('.notepad-toggle').classList.remove('selected');
            }
            if (!document.querySelector('.note-lists').classList.contains('hidden')) {
                document.querySelector('.note-lists').classList.add('hidden');
            }
            if (document.querySelector('.input-mood').classList.contains('hidden')) {
                document.querySelector('.input-mood').classList.remove('hidden');
            }
            this.setState({
                style: journal,
                container_contents: 'journal',
                type: 'Journal'
            })
        }
    }

    removeNote = (id) => {
        const deleteData = { id: id, user_id: this.state.user_id, update: this.state.update };
        this.props.removeAction(deleteData);
    }

    checkNote = (id) => {
        document.getElementById(id).querySelectorAll('.check-note').forEach((icon) => {
            if (icon.classList.contains('hidden')) {
                icon.classList.remove('hidden');
            } else {
                icon.classList.add('hidden');
            }
        })
        if (document.getElementById(id).lastElementChild.style.textDecoration === "line-through") {
            document.getElementById(id).lastElementChild.style.textDecoration = "none";
        } else {
            document.getElementById(id).lastElementChild.style.textDecoration = "line-through";
        }
    }

    stickyModal = (listTitle) => {
        const res = this.getData();
        res.then((response) => {
            // eslint-disable-next-line
            const modalData = response.data.filter((note) => {
                if (note.list === listTitle) {
                    return true;
                }
            })
            const modalArray = modalData.map((note) => {
                return (
                    <div className="modal-note">
                        <i className="tiny material-icons">fiber_manual_record</i>
                        <span>{note.title}</span>
                        <span>{note.entry_block}</span>
                        <span>{note.tags}</span>
                    </div>
                )
            })
            this.setState({
                modalData: modalArray,
                modalTitle: listTitle.toUpperCase()
            })
        })
    }

    setList = (list) => {
        this.setState({
            modalList: list
        })
    }

    deleteNote = (listTitle) => {
        const deleteData = { listb64: base64.encode(listTitle), user_id: this.state.user_id, update: "freewrite-note-delete" }
        this.props.removeAction(deleteData);
    }

    render() {
        let containerContents;
        let optionArray;
        if (this.state.container_contents === 'notepad') {
            const filterCategory = this.state.data.filter(note => note.entry_type === "Notes");
            const listNames = filterCategory.map((note) => {
                return note.list
            });
            const listNameSet = new Set(listNames);
            const uniqueListNames = [...listNameSet];
            optionArray = uniqueListNames.map((name, i) => {
                return <option key={i}>{name}</option>
            })
            containerContents = uniqueListNames.map((list, i) => {
                // eslint-disable-next-line
                const filteredNoteData = this.state.data.filter((note) => {
                    if (note.list === list) {
                        return true;
                    };
                });
                const noteTitleArray = filteredNoteData.map((note, i) => {
                    return (
                        <li key={i} id={note.id}>
                            <i onClick={() => this.removeNote(note.id)} className="tiny remove-note material-icons">clear</i>
                            <i onClick={() => this.checkNote(note.id)} className="tiny check-note material-icons" id="unchecked">check_box_outline_blank</i>
                            <i onClick={() => this.checkNote(note.id)} className="tiny check-note material-icons hidden">check_box</i>
                            <span onClick={() => this.checkNote(note.id)} id="sticky-note-title">{note.title}</span>
                        </li>
                    )
                });
                return (
                    <div className="sticky-note-container" key={i}>
                        <img width="auto" height="25px" src={pin} alt="" />
                        <div className="sticky-note hoverable">
                            <i onClick={() => this.setList(list)} className="material-icons modal-trigger" href="#modal1">delete</i>
                            <div onClick={() => this.stickyModal(list)} className="list-title modal-trigger" href="#modal4">{list}</div>
                            {noteTitleArray}
                        </div>
                    </div>            
                )
            })
        } else {
            const filterCategory = this.state.data.filter(note => note.entry_type === "Journal");
            containerContents = 
                <div className="journal-container">
                    <div className="journal-header hoverable">
                        <span className="journal-header-date">DATE: 10/19/2019</span>
                        <span className="journal-header-mood">MOOD: {filterCategory[0].mood}</span>
                        <span className="journal-header-tags">TAGS: {filterCategory[0].tags}</span>
                        {filterCategory[0].title}
                    </div>
                    <div className="journal-entry hoverable">
                        {filterCategory[0].entry_block}
                    </div>
                </div>
        }
        return (
            <div className="homepage-main-container freewrite">
                <img src={this.state.style} className="freewrite-bgi" alt="" />
                <div className="freewrite-flex-container">
                    <div className="freewrite-left-half">
                        <form onSubmit={this.handleSubmit}>
                            <div className="freewrite-input-container">
                                <textarea onChange={this.changeTitle} className="textarea-title" value={this.state.title} placeholder="Title" />
                                <div className="freewrite-inputs">
                                    <div className="freewrite-selects">
                                        <i className="material-icons arrow-black">arrow_drop_down</i>
                                        <select onChange={this.changeType} value={this.state.type} className="browser-default freewrite-selects-type" name="type">
                                            <option value="Notes">Notes</option>
                                            <option value="Journal">Journal</option>
                                        </select>
                                    </div>
                                    <div className="freewrite-selects note-lists">
                                        <i className="material-icons">add</i>
                                        <input onChange={this.changeList} value={this.state.list} type="text" list="lists" placeholder="Create List..." />
                                        <datalist name="lists" id="lists">
                                            {optionArray}
                                        </datalist>
                                    </div>
                                    <input onChange={this.changeMood} className="browser-default input-mood hidden" value={this.state.mood} type="text" placeholder="Mood" />
                                </div>
                            </div>
                            <textarea onChange={this.changeEntry} className="textarea-entry" value={this.state.entry} placeholder="Entry" />
                            <div className="freewrite-footer">
                                <textarea onChange={this.changeTags} className="textarea-tags" value={this.state.tags} placeholder="Tags" />
                                <button className="btn-flat" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="freewrite-right-half">
                        <button onClick={() => this.handleOpenClose('open')} className="freewrite-post-toggle" id="fade-out">
                            <i className="material-icons">create</i>
                        </button>
                        <button onClick={() => this.handleOpenClose('close')} className="freewrite-post-toggle selected hidden">
                            <i className="material-icons">first_page</i>
                        </button>
                        <button onClick={() => this.handleCategory('notepad')} className="notepad-toggle selected">
                            <i className="material-icons">content_paste</i>
                        </button>
                        <button onClick={() => this.handleCategory('journal')} className="journal-toggle">
                            <i className="material-icons">book</i>
                        </button>
                        <div className="freewrite-right-half-container">
                            {containerContents}
                        </div>
                    </div>
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h3>WARNING</h3>
                        <p>Once completed, this action cannot be undone.</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => this.deleteNote(this.state.modalList)} className="modal-close waves-effect waves-light btn-flat">CONTINUE</button>
                        <button className="modal-close waves-effect waves-light btn-flat">CANCEL</button>
                    </div>
                </div>
                <div id="modal4" className="modal bottom-sheet">
                    <div className="modal-title">
                        {this.state.modalTitle}
                    </div>
                    <div className="modal-container">
                        <div className="modal-container-header">
                            <span>NOTE: </span>
                            <span>DETAILS: </span>
                            <span>TAGS: </span>
                        </div>
                        {this.state.modalData}
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

export default connect(mapStateToProps, mapDispatchToProps)(FreeWrite);