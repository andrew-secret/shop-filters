import React from 'react';
import './ShopList.css';
import ShopItem from '../ShopItem/ShopItem';
import { sortBy } from 'lodash';

const ShopList = ({shopitems, sortKey, onSort}) => {
  
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
        {SORTS[sortKey](shopitems).map(item =>
          <ShopItem
            key={item.id}
            {...item}
          />
        )}
      </ul>
    </div>
  );
};

export default ShopList;


// {props.shopitems.map(item => (
//   <ShopItem 
//     key={item.id}
//     {...item}/>
// ))}