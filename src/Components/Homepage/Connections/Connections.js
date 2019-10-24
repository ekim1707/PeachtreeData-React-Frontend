import React, { Component } from 'react';
import './Connections.css';
import { connect } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardSet from './CardSet';
import axios from 'axios';
import updateAction from '../../../actions/updateAction';
import { bindActionCreators } from 'redux';
import pd from '../../NavBar/newprofilepic.jpg';
import Card from './Card';
import Charles from './images/cortez.jpeg';
import Danny from './images/danny.jpg';
import Gloria from './images/gloria.jpg';
import JonJoe from './images/jonjoe.jpeg';
import Minje from './images/minje.jpg';
import Noona from './images/noona.jpg';
import Pailyn from './images/pailyn.jpg';
import Rowena from './images/rowena.jpg';
import Sangho from './images/sangho.jpg';
import Tai from './images/tai.jpg';
import Tiffany from './images/tiffany.jpg';
import caricature from './images/caricature.png';

class Connections extends Component {
    state = {
        data: [],
        update: 'connections',
        ids: [],
        usersArray: [],
        search: '',
        filteredArray: [],
        user_id: localStorage.getItem('user_id'),
        user_email: localStorage.getItem('user_email')
    };

    getUsersList() {
        const apiURL = `https://still-falls-16479.herokuapp.com/users/connections`;
        const res = axios.get(apiURL);
        return res;
    }

    sortData(data) {
        const sortedData = data.sort((a, b) => {
            if ((a.last_name.localeCompare(b.last_name) === 0)) {
                if ((a.first_name.localeCompare(b.first_name) === 0)) {
                    return a.id.localeCompare(b.id);
                }
                return a.first_name.localeCompare(b.first_name);
            }
            return a.last_name.localeCompare(b.last_name);
        })
        return sortedData;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.updatedData !== this.props.updatedData) {
            const sortedData = this.sortData(this.props.updatedData);
            if (document.querySelector('.selected').id === '*') {
                this.setState({
                    data: sortedData
                })
            } else if (document.querySelector('.selected').id === '♥') {
                const newData = sortedData.filter((connection) => {
                    if (this.state.ids.includes(connection.id)) {
                        return connection
                    } else if (connection.favorite) {
                        return connection
                    }
                    // eslint-disable-next-line
                    return
                });
                this.setState({
                    data: newData
                })
            } else {
                const newData = sortedData.filter(connection => connection.last_name.charAt(0).toLowerCase().includes(document.querySelector('.selected').id));
                this.setState({
                    data: newData
                })
            }
        }
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line
        var instances = window.M.Sidenav.init(elems);

        const res = this.getUsersList();
        res.then((response) => {
            const userList = response.data.filter((data) => {
                if (data.users_id === parseInt(this.state.user_id)) {
                    return true
                }
                return false
            });
            this.setState({
                data: this.sortData(userList),
                usersArray: this.sortData(response.data)
            })
        });
    }

    selectDiv = (letter) => {
        document.querySelectorAll('.flex-letter-divs').forEach(div => div.classList.remove('selected'));
        document.getElementById(letter).classList.add('selected');
        const res = this.getUsersList();
        res.then((response) => {
            const userOnlyData = response.data.filter((data) => {
                if (data.users_id === parseInt(this.state.user_id)) {
                    return true
                }
                return false
            });
            const sortedData = this.sortData(userOnlyData);
            if (letter === '*') {
                this.setState({
                    data: sortedData,
                    ids: []
                })
            } else if (letter === '♥') {
                const newData = sortedData.filter(connection => connection.favorite);
                this.setState({
                    data: newData
                })
            } else {
                const newData = sortedData.filter(connection => connection.last_name.charAt(0).toLowerCase().includes(letter));
                this.setState({
                    data: newData,
                    ids: []
                })
            }
        });
    }

    refreshAction = (e) => {
        if (document.querySelector('.selected').id === '♥') {
            const res = this.getUsersList();
            res.then((response) => {
                const userOnlyData = response.data.filter((data) => {
                    if (data.users_id === parseInt(this.state.user_id)) {
                        return true
                    }
                    return false
                });
                const sortedData = this.sortData(userOnlyData);
                const newData = sortedData.filter(connection => connection.favorite);
                this.setState({
                    data: newData,
                    ids: []
                })
            });
        }
    }

    toastTrigger = (e, id, favorites) => {
        if (document.querySelector('.selected').id === '♥') {
            const idArray = this.state.ids.concat(id);
            this.setState({
                ids: idArray
            })
        }
        if ((e.target.parentNode.parentNode.classList.contains('filter-search-results')) || (e.target.parentNode.parentNode.parentNode.classList.contains('filter-search-results'))) {
            window.M.toast({html: 'Friend request sent!'});
        } else if (favorites === 'favorite_border') {
            window.M.toast({html: 'Added to favorites!'});
            const dataPackage = { id: id, favorite: true, update: this.state.update, user_id: this.state.user_id };
            this.props.updateAction(dataPackage);
        } else if (favorites === 'favorite') {
            window.M.toast({html: 'Removed from favorites!'});
            const dataPackage = { id: id, favorite: false, update: this.state.update, user_id: this.state.user_id };
            this.props.updateAction(dataPackage);
        }
    }

    globalSearch = (e) => {
        const filtered = this.state.usersArray.filter((data) => {
            if (e.target.value.length === 0) {
                return false
            } else {
                if (data.first_name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    return true;
                } else if (data.last_name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    return true;
                } else if (data.city.toLowerCase().includes(e.target.value.toLowerCase())) {
                    return true
                } else if (data.state_residing.toLowerCase().includes(e.target.value.toLowerCase())) {
                    return true
                }
                return false
            }
        });
        this.setState({
            search: e.target.value,
            filteredArray: filtered
        })
    }

    render() {
        const alphabetString = '*♥abcdefghijklmnopqrstuvwxyz';
        const alphabetArray = alphabetString.split('');
        const letterDivs = alphabetArray.map((letter, i) => {
            if (i === 0) {
                return (
                    <div className="letter-divs" key={i}>
                        <div onClick={() => this.selectDiv(letter)} className="flex-letter-divs selected" id={letter}>
                            <i className="material-icons">all_inclusive</i>
                        </div>
                    </div>
                )
            } else if (i === 1) {
                return (
                    <div onClick={() => this.selectDiv(letter)} className="letter-divs" key={i}>
                        <div className="flex-letter-divs" id={letter}>
                            <i className="material-icons">favorite</i>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div onClick={(x) => this.selectDiv(letter)} className="letter-divs" key={i}>
                        <div className="flex-letter-divs" id={letter}>
                            {letter.toUpperCase()}
                        </div>
                    </div>
                )
            }
        });
        const cardArray = this.state.filteredArray.map((card, i) => {
            let image;
            if (card.first_name === 'Charles') {
                image = Charles
            } else if (card.first_name === 'Danny') {
                image = Danny
            } else if (card.first_name === 'Gloria') {
                image = Gloria
            } else if (card.first_name === 'Hyeuryun') {
                image = Noona
            } else if (card.first_name === 'Jonathan') {
                image = JonJoe
            } else if (card.first_name === 'Minje') {
                image = Minje
            } else if (card.first_name === 'Pailyn') {
                image = Pailyn
            } else if (card.first_name === 'Rowena') {
                image = Rowena
            } else if (card.first_name === 'Sangho') {
                image = Sangho
            } else if (card.first_name === 'Tai') {
                image = Tai
            } else if (card.first_name === 'Tiffany') {
                image = Tiffany
            } else {
                image = caricature
            }
            return <Card toastTrigger={this.toastTrigger} data={card} image={image} key={i} />
        });
        return (
            <div className="homepage-main-container connections">
                <Carousel
                additionalTransform={0}
                arrows={true}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-padding-bottom"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 20,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 20,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 20,
                    partialVisibilityGutter: 30
                    }
                }}
                showDots
                sliderClass=""
                slidesToSlide={4}
                swipeable
                >
                    {letterDivs}
                </Carousel>
                <div id="slide-out" className="sidenav">
                    <div className="background-image"></div>
                    <div className="sidenav-first-row">
                        <img src={pd} className="profile-picture" alt="" />
                        <div className="user-name">
                            Eugene Kim
                        </div>
                    </div>
                    <div className="user-info">
                        <div className="user-location">
                            Johns Creek, GA
                        </div>
                        <div className="user-email">
                            ekim1707@gmail.com
                        </div>
                        <div className="connections-info">
                            <i className="material-icons">person</i>
                            <div>CONNECTIONS:</div>
                            <span>11</span>
                        </div>
                        <div className="connections-info">
                            <i className="material-icons">group</i>
                            <div>GROUPS:</div>
                            <span>4</span>
                        </div>
                    </div>
                    <hr />
                    <div className="add-friend-filter-search">
                        <i className="material-icons">search</i>
                        <input onChange={this.globalSearch} value={this.state.search} className="browser-default" type="text" placeholder="by name or user-info..." id="filter-search" />
                    </div>
                    <div className="filter-search-results">
                        {cardArray}
                    </div>
                </div>
                <button data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">search</i>
                </button>
                <button onClick={this.refreshAction} className="refresh">
                    <i className="material-icons">refresh</i>
                </button>
                <CardSet toastTrigger={this.toastTrigger} data={this.state.data} />
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
        updateAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Connections);