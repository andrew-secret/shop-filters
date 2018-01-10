import React from 'react';
import './ShopList.css';
import ShopItem from '../ShopItem/ShopItem';
import Button from '../Button/Button';
import { sortBy } from 'lodash';
import { CSSTransitionGroup } from 'react-transition-group';

const ShopList = ({
    shopitems, 
    sortKey, 
    loadMore, 
    showMore,
    updateRating
}) => {

    const checkForLikes = () => {
        let rating_sum = 0;
        shopitems.forEach((obj) => {
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
                {SORTS[sortKey](shopitems).slice(0, loadMore).map(item =>
                    <ShopItem
                        updateRating={updateRating}
                        key={item.id}
                        {...item}
                    />
                )}
                </ul>
            </CSSTransitionGroup>
            {loadMore < shopitems.length ? (
                <Button
                    className="shopList__showMoreBtn"
                    onClick={showMore}
                    label="Show more" />
            ) : null }
        </div>
    );
};

export default ShopList;