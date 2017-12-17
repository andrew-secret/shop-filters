import React from 'react';

import { formatPrice } from '../../lib/shopHelper';
import './ShopItem.css';

const ShopItem = ({
    image,
    model,
    price
    }) => {

    // const convertPrice = (...price) =>
    //     parseInt(price);

    return (
    <li className="shopItem">
        <img src={require(`../../assets/shopitems/${image}`)}
            alt={model}/>

        <div className="projectDetails">
            <h3 className="headline">
            {model}
            </h3>
        </div>
        <div className="price">
            {formatPrice(price)}
        </div>
    </li>
    );
};

export default ShopItem;