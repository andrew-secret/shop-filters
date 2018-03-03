import React from 'react';
import ConnectedTab from '../Tab/Tab';
import './Tabs.css';

const Tabs = () => {
    const sortList = [
        { id: 1, value: 'Woman', sortBy: 'FEMALE'},
        { id: 2, value: 'Man', sortBy: 'MALE'},
    ];
    
    return (
        <ul className="tabsList">
            {sortList.map(item => (
            <ConnectedTab
                key={item.id}
                {...item}/>
            ))}
        </ul>
    )
};

export default Tabs;