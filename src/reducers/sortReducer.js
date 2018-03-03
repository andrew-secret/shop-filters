import * as actions from '../actions/action-types';

const sortReducer = (state = 'NONE', action) => {
    switch(action.type) {
        case actions.SORT_ITEMS : {
            return applySortItems(state, action);
        }
        default: return state;
    }
}

export default sortReducer;

const applySortItems = (state, action) => action.sortKey;