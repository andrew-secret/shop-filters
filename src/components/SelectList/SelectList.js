import React from 'react';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import './SelectList.css';

const sortList = [
    { id: 1, value: 'Price: low to high', sortBy: 'PRICE_ASC'},
    { id: 2, value: 'Price: high to low', sortBy: 'PRICE_DESC'},
    { id: 3, value: 'Rating: low to high', sortBy: 'RATING_ASC'},
    { id: 4, value: 'Rating: high to low', sortBy: 'RATING_DESC'},
];

const SelectList = (props) =>
    <div className="selectListWrapper">
        <select 
            className="SelectList"
            defaultValue="Sort By:"
            onChange={props.handleChange}>
            <option
                defaultValue="Sort By:"
                disabled>
                Sort By:
            </option>
            {sortList.map(item => (
                <option
                    value={item.sortBy}
                    key={item.id}>
                    {item.value}
                </option>
            ))}
         
        </select>
        <MdKeyboardArrowDown className="SelectListIcon"/>
    </div>

export default SelectList;

