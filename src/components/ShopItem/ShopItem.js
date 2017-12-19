import React from 'react';

import HeartOutlineIcon from 'react-icons/lib/ti/heart-outline'
import HeartIcon from 'react-icons/lib/ti/heart'
import { formatPrice } from '../../lib/scripts/shopHelper';
import './ShopItem.css';

const ShopItem = ({
    image,
    brand,
    model,
    price,
    rating,
    updateRating,
    id
    }) => {

    return (
    <li className="shopItem">
        <div 
            className="shopItem__rating"
            onClick={() => updateRating(id)}>
            {rating > 0 ? (
                <HeartIcon className="shopItem__heart" />
            ) : (
                <HeartOutlineIcon className="shopItem__heartOutline" />
            )}
            
        </div>
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