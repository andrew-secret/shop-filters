import React from 'react';
import classnames from 'classnames';
import { partial } from '../../lib/shopHelper';
import styles from  './Tab.css';

const Tab = props => {

    const projectListClasses = classnames('tabItem', {
        ['isActive']: props.isActive === true,
      });

    const handleToggle = partial(props.addActiveClass, props.id);

    return(
        <li key={props.id} className={projectListClasses}
            onClick={handleToggle}>
            {props.gender}
        </li>
    )
}

export default Tab;