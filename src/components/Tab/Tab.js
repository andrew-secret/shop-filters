import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { doSortItems } from '../../actions/action-creators';
import './Tab.css';

const Tab = ({
    id,
    value,
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

const mapStateToProps = (state) => {
    return {
        sortKey: state.sortState,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSort: sortKey => dispatch(doSortItems(sortKey)),
    }
}

const ConnectedTab = connect(mapStateToProps, mapDispatchToProps)(Tab);

export default ConnectedTab;