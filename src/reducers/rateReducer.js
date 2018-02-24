import * as actions from '../actions/action-types';

const rateReducer = (state = [], action) => {
    switch(action.type) {
        case actions.RATE_ITEM : {
            return applyRating(state, action);
        }
        default: return state;
    }
}

export default rateReducer;

const applyRating = (state, action) => {
    // WIP
};
