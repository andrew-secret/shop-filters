import React, { Component } from 'react';
import classnames from 'classnames';
import { partial } from '../../lib/shopHelper';
import classNames from 'classnames';
import styles from  './Tab.css';

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
