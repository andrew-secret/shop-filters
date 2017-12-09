import React from 'react';
import './FilterBar.css';
import { Sticky } from 'react-sticky';
import Tabs from '../Tabs/Tabs';

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
                    <Tabs
                        addActiveClass={props.addActiveClass}
                        tabList={props.tabList}/>
                </div>
            )
        }
    }
    </Sticky>
  );
};

export default FilterBar;