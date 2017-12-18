import React from 'react';
import './ShopList.css';
import ShopItem from '../ShopItem/ShopItem';
import Button from '../Button/Button';
import { sortBy } from 'lodash';

const ShopList = ({shopitems, sortKey, onSort, loadMore, showMore}) => {

    const SORTS = {
        NONE: shopitems => shopitems,
        PRICE_ASC: shopitems => sortBy(shopitems, 'price'),
        PRICE_DESC: shopitems => sortBy(shopitems, 'price').reverse(),
        FEMALE: shopitems => sortBy(shopitems, 'gender'),
        MALE: shopitems => sortBy(shopitems, 'gender').reverse(),
    }

    return (
        <div className="wrapper">
            <ul className="shopList">
            {SORTS[sortKey](shopitems).slice(0, loadMore).map(item =>
                <ShopItem
                    key={item.id}
                    {...item}
                />
            )}
            </ul>
            {loadMore < shopitems.length ? (
                <Button
                    className="showMore-Button"
                    onClick={showMore}
                    label="Show more" />
            ) : null }
        </div>
    );
};

export default ShopList;