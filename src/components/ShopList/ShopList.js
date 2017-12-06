import React from 'react';
import './ShopList.css';
import ShopItem from '../ShopItem/ShopItem';

const ShopList = props => {
  
  return (
    <div className="wrapper">
      <ul className="shopList">
        {props.shopitems.map(item => (
          <ShopItem 
            key={item.id}
            {...item}/>
        ))}
      </ul>
    </div>
  );
};

export default ShopList;