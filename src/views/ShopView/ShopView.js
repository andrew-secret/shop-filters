import React from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import ShopList from '../../components/ShopList/ShopList';

const ShopView = (props) => {
    return (
        <div>
            <FilterBar
                sortKey={props.sortKey}
                onSort={props.onSort}
                handleChange={props.handleChange}/>
            <ShopList
                sortKey={props.sortKey}
                onSort={props.onSort}
                loadMore={props.loadMore}
                showMore={props.showMore}
                updateRating={props.updateRating}
                shopitems={props.shopitems}/>
        </div>
    );
}

export default ShopView;