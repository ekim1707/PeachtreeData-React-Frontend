import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div onClick={() => this.props.modalTrigger(this.props.data.id)} className="card small media-card modal-trigger" data-target="modal2">
                <img src={this.props.data.image} alt="" />
            </div>
        )
    }

}

export default Card;