import React from 'react';
import classNames from 'classnames';
import './Tab.css';

const Tab = ({
    id,
    value,
    handleChange,
    sortKey,
    onSort,
    sortBy
}) => {

    const tabClass = classNames(
        ['tabItem'],
        {'isActive': sortKey === sortBy }
    );

    return(
        <li 
            key={id} 
            className={tabClass}
            onClick={() => onSort(sortBy)}>
            {value}
        </li>
    );
}

export default Tab;