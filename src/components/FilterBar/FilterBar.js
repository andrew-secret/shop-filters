import React from 'react';
import './FilterBar.css';
import { Sticky } from 'react-sticky';
import Tabs from '../Tabs/Tabs';
import SelectList from '../SelectList/SelectList';


const sortList = [
    { id: 1, value: 'Woman', sortBy: 'FEMALE'},
    { id: 2, value: 'Man', sortBy: 'MALE'},
];

const selectList = [
    { id: 1, value: 'Price: low to high', sortBy: 'PRICE_ASC'},
    { id: 2, value: 'Price: high to low', sortBy: 'PRICE_DESC'},
    { id: 3, value: 'Rating: low to high', sortBy: 'RATING_ASC'},
    { id: 4, value: 'Rating: high to low', sortBy: 'RATING_DESC'},
];

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
                        sortList={sortList}
                        {...props}/>
                    <SelectList
                        selectList={selectList}
                        defaultValue="Sort by:"
                        {...props}/>
                </div>
            )
        }
    }
    </Sticky>
  );
};

export default FilterBar;