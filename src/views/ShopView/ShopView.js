import React from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import ShopList from '../../components/ShopList/ShopList';

const ShopView = ({
    sortKey,
    onSort,
    handleChange,
    loadMore,
    showMore,
    updateRating,
    shopitems
}) => {
    return (
        <div>
            <FilterBar
                sortKey={sortKey}
                onSort={onSort}
                handleChange={handleChange}/>
            <ShopList
                sortKey={sortKey}
                onSort={onSort}
                loadMore={loadMore}
                showMore={showMore}
                updateRating={updateRating}
                shopitems={shopitems}/>
        </div>
    );
}

export default ShopView;