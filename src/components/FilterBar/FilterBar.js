import React from 'react';
import './FilterBar.css';
import { Sticky } from 'react-sticky';
// import ShopItem from '../ShopItem/ShopItem';

const FilterBar = props => {
  
  return (
    <Sticky>
    {
        ({
            style,
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
            }) => {
            return (
                <div className="FilterBar" style={style}>
                    <div>Hallo</div>
                </div>
            )
        }
    }
    </Sticky>
  );
};

export default FilterBar;