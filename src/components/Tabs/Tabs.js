import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';

const Tabs = ({
    sortList,
    sortKey,
    onSort
}) => {

    return (
        <ul className="tabsList">
            {sortList.map(item => (
            <Tab
                sortKey={sortKey}
                onSort={onSort}
                key={item.id}
                {...item}/>
            ))}
        </ul>
    )
};

export default Tabs;