import React from 'react';
import './ShopItem.css';

const ShopItem = props => {

  return (
    <li className="shopItem">
        <img src={require(`../../assets/shopitems/${props.image}`)}
          alt={props.model}/>

        <div className="projectDetails">
          <h3 className="headline">
            {props.model}
          </h3>
        </div>
        <div className="price">
          {props.price}€
        </div>
    </li>
  );
};

export default ShopItem;