import React from 'react';
import Button from '../../components/Button/Button';
import { findById } from '../../lib/scripts/shopHelper';
import { formatPrice } from '../../lib/scripts/shopHelper';
import SelectList from '../../components/SelectList/SelectList';
import { CSSTransitionGroup } from 'react-transition-group';
import './DetailView.css';

const selectList = [
    {id: 1, value: 'S'},
    {id: 2, value: 'M'},
    {id: 3, value: 'L'},
    {id: 4, value: 'XL'}
];

const defaultValue = 'Select your size:';

const DetailView = props => {
    const id = parseInt(props.match.params.id, 10);
    const shopItem = findById(id, props.shopitems);
    const price = formatPrice(shopItem.price);
    const addToCart = 'Add to cart';

    return (
        <CSSTransitionGroup
            transitionName="fade-in"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
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
                    <SelectList
                        className="detailView__select"
                        defaultValue={defaultValue}
                        selectList={selectList}/>
                    <Button
                        label={addToCart}
                        className="detailView__button"
                    />
                </div>
            </div>
        </CSSTransitionGroup>
    );
}

export default DetailView;