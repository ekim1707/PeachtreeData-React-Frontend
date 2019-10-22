import React, { Component } from 'react';
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

class CardSet extends Component {
    state = {}

    render() {
        const cardArray = this.props.data.map((card, i) => {
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
            }else if (card.first_name === 'Pailyn') {
                image = Pailyn
            } else if (card.first_name === 'Rowena') {
                image = Rowena
            } else if (card.first_name === 'Sangho') {
                image = Sangho
            } else if (card.first_name === 'Tai') {
                image = Tai
            } else if (card.first_name === 'Tiffany') {
                image = Tiffany
            }
            return <Card toastTrigger={this.props.toastTrigger} data={card} image={image} key={i} />
        });
        return (
            <div className="cardset-container row">
                {cardArray}
            </div>
        )
    }
}

export default CardSet;