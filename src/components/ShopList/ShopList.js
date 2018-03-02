import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { sortBy } from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group';
import { store } from './../../store';
import ShopItem from '../ShopItem/ShopItem';
import Button from '../Button/Button';
import './ShopList.css';

const ShopList = (props, firebbase) => {

    const checkForLikes = () => {
        let rating_sum = 0;
        props.shopitems.forEach((obj) => {
            rating_sum += obj['rating'];
        });

        const result = rating_sum > 0 ? (
            true
        ) : (
            false
        )
        return result;
    }

    const SORTS = {
        NONE: shopitems => shopitems,
        PRICE_ASC: shopitems => sortBy(shopitems, 'price'),
        PRICE_DESC: shopitems => sortBy(shopitems, 'price').reverse(),
        FEMALE: shopitems => sortBy(shopitems, 'gender'),
        MALE: shopitems => sortBy(shopitems, 'gender').reverse(),
        RATING_ASC: shopitems => sortBy(shopitems, 'rating'),
        RATING_DESC: shopitems => checkForLikes() ? sortBy(shopitems, 'rating').reverse() : shopitems,
    }

    return (
        <div className="wrapper">
            <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <ul className="shopList">
                    {isLoaded(props.shopitems) ? (
                    SORTS[props.sortState](props.shopitems).map(item =>
                        <ShopItem
                            updateRating={props.updateRating}
                            key={item.id}
                            {...item}
                        />
                    )
                    ): null}
                </ul>
            </CSSTransitionGroup>
            {/* {props.loadMore < props.shopitems.length ? (
                <Button
                    className="shopList__showMoreBtn"
                    onClick={props.showMore}
                    label="Show more" />
            ) : null } */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        shopitems: state.firebase.data.shopitems,
        sortState: state.sortState,
    }
};

export default compose(
    firebaseConnect([
      'shopitems' // { path: '/todos' } // object notation
    ]),
    connect(mapStateToProps)
  )(ShopList);