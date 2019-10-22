import React, { Component } from 'react';
import './QuoteBook.css';
import updateAction from '../../actions/updateAction';
import removeAction from '../../actions/removeAction';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import axios from 'axios';
import base64 from 'react-native-base64';
import quote from './quote.png';
import song from './song.png';

class QuoteBook extends Component {
    state = {
        data: [],
        quote: '',
        quoteb64: '',
        type: 'Quotation',
        origin: '',
        originb64: '',
        significance: '',
        significanceb64: '',
        when_said: '',
        when_saidb64: '',
        toggleButton: 'add',
        id: '',
        update: 'quotebook',
        user_id: localStorage.getItem('user_id'),
        user_email: localStorage.getItem('user_email')
    };

    getData() {
        const apiURL = `${window.apiHost}/users/components/?id=${this.state.user_id}&type=quotebook`;
        const res = axios.get(apiURL);
        return res;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.updatedData !== this.props.updatedData) {
            this.setState({
                data: this.props.updatedData,
                quote: '',
                quoteb64: '',
                type: 'Quotation',
                origin: '',
                originb64: '',
                significance: '',
                significanceb64: '',
                when_said: '',
                when_saidb64: '',
                show: false
            })
        }
    }

    componentDidMount() {
        // eslint-disable-next-line
        var instances = window.M.AutoInit();
        const res = this.getData();
        res.then((response) => {
            this.setState({
                data: response.data
            })
        });
    }

    toggleAddQuote = (e) => {
        if (!document.getElementById('add-quote').classList.contains('hidden')) {
            document.getElementById('add-quote').classList.add('hidden');
            document.getElementById('main-container-quotes').style.height = "92%";
            this.setState({
                toggleButton: 'add'
            })
        } else if (document.getElementById('add-quote').classList.contains('hidden')) {
            document.getElementById('add-quote').classList.remove('hidden');
            document.getElementById('main-container-quotes').style.height = "72%";
            this.setState({
                toggleButton: 'remove'
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const postData = {...this.state};
        this.props.updateAction(postData);
    }

    setId = (id) => {
        this.setState({
            id: id
        })
    }

    removeQuote = (e) => {
        const deleteData = { id: this.state.id, user_id: this.state.user_id, update: this.state.update };
        this.props.removeAction(deleteData);
    }

    changeQuote = (e) => {
        this.setState({
            quote: e.target.value,
            quoteb64: base64.encode(e.target.value)
        })
    }

    changeSignificance = (e) => {
        this.setState({
            significance: e.target.value,
            significanceb64: base64.encode(e.target.value)
        })
    }

    changeType = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    changeOrigin = (e) => {
        this.setState({
            origin: e.target.value,
            originb64: base64.encode(e.target.value)
        })
    }

    changeWhenSaid = (e) => {
        this.setState({
            when_said: e.target.value,
            when_saidb64: base64.encode(e.target.value)
        })
    }

    all() {
        const navToggles = document.querySelectorAll('.quote-navbar-toggles');
        navToggles.forEach((toggle) => {
            toggle.classList.remove('selected');
        })
        document.getElementById('all').classList.add('selected');
        const res = this.getData();
        res.then((response) => {
            this.setState({
                data: response.data
            })
        })
    }

    quotesOnly() {
        const navToggles = document.querySelectorAll('.quote-navbar-toggles');
        navToggles.forEach((toggle) => {
            toggle.classList.remove('selected');
        })
        document.getElementById('quotes').classList.add('selected');
        const res = this.getData();
        res.then((response) => {
            const quotesData = response.data.filter(entry => entry.quote_type.includes('Quotation'));
            this.setState({
                data: quotesData
            })
        })
    }

    lyricsOnly() {
        const navToggles = document.querySelectorAll('.quote-navbar-toggles');
        navToggles.forEach((toggle) => {
            toggle.classList.remove('selected');
        })
        document.getElementById('lyrics').classList.add('selected');
        const res = this.getData();
        res.then((response) => {
            const lyricsData = response.data.filter(entry => entry.quote_type.includes('Song Lyric'));
            this.setState({
                data: lyricsData
            })
        })
    }

    render() {
        const arrayLength = this.state.data.length;
        const quotebookArray = this.state.data.map((entry, i) => {
            if (i + 1 === arrayLength) {
                return (
                    <div className="row-quotes hoverable last-quote" key={i}>
                        <img className="row-quotes-background" src={entry.quote_type === 'Quotation' ? quote : song} alt="" />
                        <div className="row-quotes-main-entry">
                            "{entry.quote}"
                        </div>
                        <div className="row-quotes-right-col">
                            <i onClick={() => this.setId(entry.id)} data-target="modal1" className="material-icons delete-quote modal-trigger" id={entry.id}>delete</i>
                            <div className="style-peachpuff">{entry.origin}</div>
                            <div className="when-row"><i class="material-icons">watch_later</i>{entry.when_said}</div>
                            {/* <div>{entry.significance}</div> */}
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="row-quotes hoverable" key={i}>
                        <img className="row-quotes-background" src={entry.quote_type === 'Quotation' ? quote : song} alt="" />
                        <div className="row-quotes-main-entry">
                            "{entry.quote}"
                        </div>
                        <div className="row-quotes-right-col">
                            <i onClick={() => this.setId(entry.id)} data-target="modal1" className="material-icons delete-quote modal-trigger" id={entry.id}>delete</i>
                            <div className="style-peachpuff">{entry.origin}</div>
                            <div className="when-row"><i class="material-icons">watch_later</i>{entry.when_said}</div>
                            {/* <div>{entry.significance}</div> */}
                        </div>
                    </div>
                )
            }
        })
        return (
            <div className="homepage-main-container">
                <div className="quote-navbar">
                    <div onClick={() => this.all()} className="quote-navbar-toggles selected" id="all">All</div>
                    <div onClick={() => this.quotesOnly()} className="quote-navbar-toggles" id="quotes">Quotations</div>
                    <div onClick={() => this.lyricsOnly()} className="quote-navbar-toggles" id="lyrics">Lyrics</div>
                    <input type="text" className="quote-search browser-default" placeholder="search"/>
                    <button onClick={() => this.toggleAddQuote()} className="btn-floating btn-small waves-effect waves-light hoverable gray"><i className="material-icons">{this.state.toggleButton}</i></button>
                </div>
                <div className="row-quotes add-quote hidden" id="add-quote">
                    <form onSubmit={this.handleSubmit}>
                        <textarea onChange={this.changeQuote} className="textarea-quote" value={this.state.quote} placeholder="Quote" />
                        <textarea onChange={this.changeSignificance} className="textarea-significance" value={this.state.significance} placeholder="Significance" />
                        <div className="input-container">
                            <div className="text-inputs">
                                <input onChange={this.changeOrigin} className="browser-default origin" value={this.state.origin} type="text" placeholder="Originator" />
                                <input onChange={this.changeWhenSaid} className="browser-default whensaid" value={this.state.when_said} type="text" placeholder="When" />
                            </div>
                            <div className="click-inputs">
                                <div className="input-field">
                                    <select onChange={this.changeType} value={this.state.type} name="type">
                                        <option value="Quotation">Quotation</option>
                                        <option value="Song Lyric">Song Lyric</option>
                                    </select>
                                </div>
                                <button className="btn-flat btn-quotebook" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="main-container-quotes" id="main-container-quotes">
                    {quotebookArray}
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h3>WARNING</h3>
                        <p>Once completed, this action cannot be undone.</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => this.removeQuote()} className="modal-close waves-effect waves-light btn-flat">CONTINUE</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBook);