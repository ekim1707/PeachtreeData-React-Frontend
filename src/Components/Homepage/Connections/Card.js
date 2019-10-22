import React, { Component } from 'react';

class Card extends Component {
    state = {
        favorites: 'favorite_border',
        style: 'lightgray',
        boolean: '',
        add: 'add',
        available: '',
        green: '',
        online: ''
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            if (this.props.data.favorite === true) {
                this.setState({
                    favorites: 'favorite',
                    style: 'red',
                    boolean: true
                })
            } else if (this.props.data.favorite === false) {
                this.setState({
                    favorites: 'favorite_border',
                    style: 'lightgray',
                    boolean: false
                })
            }
        }
    }

    componentDidMount() {
        if (this.props.data.favorite === true) {
            this.setState({
                favorites: 'favorite',
                style: 'red',
                boolean: true
            })
        } else if (this.props.data.favorite === false) {
            this.setState({
                favorites: 'favorite_border',
                style: 'lightgray',
                boolean: false
            })
        }
        if (this.props.data.available === true) {
            this.setState({
                online: 'Online',
                green: 'green'
            })
        } else if (this.props.data.available === false) {
            this.setState({
                online: 'Offline',
                green: 'red'
            })
        }
    }

    render() {
        return(
            <div onClick={(e) => this.props.toastTrigger(e, this.props.data.id, this.state.favorites)} className="card hoverable small connections-card">
                <div className="card-image">
                    <img src={this.props.image} alt='' />
                    <span><i className="material-icons" style={{ color: this.state.style }}>{this.state.favorites}</i></span>
                </div>
                <div className="card-action">
                    <span><i className="material-icons">{this.state.add}</i></span>
                    <div>{this.props.data.first_name} {this.props.data.last_name}</div>
                    <div>{this.props.data.city}, {this.props.data.state_residing}</div>
                    <div className="online-status" style={{ color: this.state.green }}>{this.state.online}</div>
                </div>
            </div>
        )
    }
}

export default Card;