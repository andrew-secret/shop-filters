import React from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import ConnectedShopList from '../../components/ShopList/ShopList';

const ShopView = ({
    loadMore,
    showMore,
    updateRating,
    shopitems
}) => {
    return (
        <div>
            <FilterBar/>
            <ConnectedShopList
                loadMore={loadMore}
                showMore={showMore}
                updateRating={updateRating}
                shopitems={shopitems}/>
        </div>
    );
}

export default ShopView;