import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';

const sortList = [
    { id: 1, value: 'Woman', sortBy: 'FEMALE'},
    { id: 2, value: 'Man', sortBy: 'MALE'},
];

const Tabs = (props) => {

    return (
        <ul className="tabsList">
            {sortList.map(item => (
            <Tab
                onSort={props.onSort}
                key={item.id}
                {...item}/>
            ))}
        </ul>
    )
};

export default Tabs;