import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    render() {
        const {details} = this.props;

        return( 
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3>{details.name}</h3>
                <span className="price">{formatPrice(details.price)}</span>
                <p>{details.desc}</p>
                <button>Add To Order</button>
            </li>
        )
    }
}

export default Fish;