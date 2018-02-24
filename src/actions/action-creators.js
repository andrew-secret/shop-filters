import * as actions from './action-types';

export const doRateItem = (id) => {
    return {
        type: actions.RATE_ITEM,
        shopItem: { id },
    };
}

export const doSortItems = (sortKey) => {
    return {
        type: actions.SORT_ITEMS,
        sortKey,
    }
}