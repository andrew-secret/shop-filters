import React from 'react';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { doSortItems } from '../../actions/action-creators';
import './SelectList.css';

const SelectList = ({
    onSelect,
    sortKey,
    handleChange,
    className
}) => {

    const selectList = [
        { id: 1, value: 'Price: low to high', sortBy: 'PRICE_ASC'},
        { id: 2, value: 'Price: high to low', sortBy: 'PRICE_DESC'},
        { id: 3, value: 'Rating: low to high', sortBy: 'RATING_ASC'},
        { id: 4, value: 'Rating: high to low', sortBy: 'RATING_DESC'},
    ];

    const defaultValue = 'Sort by:';

    const selectClasses = classNames(['selectListWrapper'], className);

    return (
        <div className={selectClasses}>
            <select 
                className="SelectList"
                defaultValue={defaultValue}
                onChange={handleChange}>
                <option
                    defaultValue={defaultValue}
                    disabled>
                    {defaultValue}
                </option>
                {selectList.map(item => (
                    <option
                        value={item.sortBy}
                        key={item.id}>
                        {item.value}
                    </option>
                ))}
            
            </select>
            <MdKeyboardArrowDown className="SelectListIcon"/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sortKey: state.sortKey,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: evnt => dispatch(doSortItems(evnt.target.value)),
    }
}

const ConnectedSelectList = connect(mapStateToProps, mapDispatchToProps)(SelectList);

export default ConnectedSelectList;

