import React, { Component } from 'react';
import classnames from 'classnames';
import { partial } from '../../lib/shopHelper';
import styles from  './Tab.css';

const Tab = ({
    id,
    value,
    handleChange,
    sortKey,
    onSort,
    sortBy
}) =>
    <li key={id} className="tabItem"
        onClick={() => onSort(sortBy)}>
        {value}
    </li>

export default Tab;
