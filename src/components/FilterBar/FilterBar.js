import React from 'react';
import { Sticky } from 'react-sticky';
import Tabs from '../Tabs/Tabs';
import ConnectedSelectList from '../SelectList/SelectList';
import './FilterBar.css';

const FilterBar = () => {
  
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
                    <Tabs/>
                    <ConnectedSelectList/>
                </div>
            )
        }
    }
    </Sticky>
  );
};

export default FilterBar;