import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';

const Tabs = props => {

    return(
        <ul className="tabsList">
            {props.tabList.map(item => (
            <Tab
                addActiveClass={props.addActiveClass}
                sortByGender={props.sortByGender}
                key={item.id}
                {...item}/>
            ))}
        </ul>
    )
};

export default Tabs;