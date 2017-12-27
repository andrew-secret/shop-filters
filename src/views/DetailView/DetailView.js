import React from 'react';
import Button from '../../components/Button/Button';
import { findById } from '../../lib/scripts/shopHelper';
import { formatPrice } from '../../lib/scripts/shopHelper';
import './DetailView.css';

const DetailView = props => {
    const id = parseInt(props.match.params.id);
    const idTypeOf = typeof parseInt(props.match.params.id);
    const shopItem = findById(id, props.shopitems);
    const price = formatPrice(shopItem.price);
    const ADD_TO_CARRT = 'Add to cart';

    return (
        <div className="detailView">
            <div className="detailView__left">
                <img src={require(`../../assets/shopitems/${shopItem.image}`)}
                    className="shopItem__image"
                    alt={shopItem.model}/>
            </div>
            <div className="detailView__right">
                <span className="detailView__brand">
                    {shopItem.brand}
                </span>
                <h1 className="detailView__h1">
                    {shopItem.model}
                </h1>
                <span className="detailView__price">
                    {price}
                </span>
                <Button
                    label={ADD_TO_CARRT}
                    className="detailView__button"
                />
            </div>
        </div>
    );
}

export default DetailView;