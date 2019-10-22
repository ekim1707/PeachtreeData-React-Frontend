import React, { Component } from 'react';
import Card from './Card';
import VideoCard from './VideoCard';

class CardSet extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const cardList = this.props.data.map((card, i) => {
            if (card.image) {
                return (
                    <Card modalTrigger={this.props.modalTrigger} data={card} key={i} />
                )
            } else if (card.embed) {
                return (
                    <VideoCard modalTrigger={this.props.modalTrigger} data={card} key={i} />
                )
            } else {
                // eslint-disable-next-line
                return
            }
        })

        return(
            <div className="media-container row">
                {cardList}
            </div>
        )
    }
}

export default CardSet;