import React from 'react';
import classnames from 'classnames';
import { partial } from '../../lib/shopHelper';
import styles from  './Tab.css';

const Tab = ({
    id,
    value,
    handleChange,
    sortKey,
    onSort,
}) =>
    <li key={id} className="tabItem"
        onClick={() => onSort(sortKey)}>
        {value}
    </li>

export default Tab;