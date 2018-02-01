import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import { findById } from '../../lib/scripts/shopHelper';
import { formatPrice } from '../../lib/scripts/shopHelper';
import SelectList from '../../components/SelectList/SelectList';
import { CSSTransitionGroup } from 'react-transition-group';
import { base } from '../../base';
import './DetailView.css';

const defaultValue = 'Select your size:';
const selectList = [
    {id: 2, value: 'M'},
    {id: 3, value: 'L'},
    {id: 4, value: 'XL'}
];

class DetailView extends Component {
    componentWillMount () {
        this.shopItemsRef = base.syncState('shopitems', {
            context: this,
            state: 'shopitems'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.shopItemsRef);
    }

    render() {
        const id = parseInt(this.props.match.params.id, 10);
        const shopItem = findById(id, this.props.shopitems);
        const addToCart = 'Add to cart';
        return (
            <div>
                <CSSTransitionGroup
                    transitionName="fade-in"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                {shopItem !== undefined ? (
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
                            {shopItem.price}
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
                ) : null}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default DetailView;