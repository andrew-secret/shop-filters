import React from 'react';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import classNames from 'classnames';
import './SelectList.css';

const SelectList = ({
    defaultValue,
    handleChange,
    selectList,
    className
}) => {

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
export default SelectList;

