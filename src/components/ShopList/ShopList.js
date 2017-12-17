import React from 'react';
import './ShopList.css';
import ShopItem from '../ShopItem/ShopItem';
import { sortBy } from 'lodash';

const ShopList = ({shopitems, sortKey, onSort, loadMore, showMore}) => {

    const SORTS = {
        NONE: shopitems => shopitems,
        PRICE_ASC: shopitems => sortBy(shopitems, 'price'),
        PRICE_DESC: shopitems => sortBy(shopitems, 'price').reverse(),
        FEMALE: shopitems => sortBy(shopitems, 'gender'),
        MALE: shopitems => sortBy(shopitems, 'gender').reverse(),
    }

    // const loadCount = loadMore ? shopitems.length : 6;

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
            <a className="tabItem"
                onClick={showMore}>Show more</a>
        </div>
    );
};

export default ShopList;