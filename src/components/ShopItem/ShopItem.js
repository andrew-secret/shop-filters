import React from 'react';

import { formatPrice } from '../../lib/scripts/shopHelper';
import './ShopItem.css';

const ShopItem = ({
    image,
    brand,
    model,
    price
    }) => {

    return (
    <li className="shopItem">
        <img src={require(`../../assets/shopitems/${image}`)}
            className="shopItem__image"
            alt={model}/>

        <div className="shopItem__description">
            <h3 className="shopItem__headline">
                <strong>
                    {brand}
                </strong>
            {model}
            </h3>
            <div className="shopItem__price">
                {formatPrice(price)}
            </div>
        </div>
    </li>
    );
};

export default ShopItem;