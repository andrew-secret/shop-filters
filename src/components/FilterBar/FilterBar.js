import React from 'react';
import './FilterBar.css';
import { Sticky } from 'react-sticky';
import Tabs from '../Tabs/Tabs';
import SelectList from '../SelectList/SelectList';

const FilterBar = (props) => {
  
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
                    <Tabs
                        onSort={props.onSort} 
                        {...props}/>
                    <SelectList {...props}/>
                </div>
            )
        }
    }
    </Sticky>
  );
};

export default FilterBar;