import { SET_VISIBILiTY_FILTER } from "../actions/actions";


// Initial values for filterState
let initialState = 'SHOW_ALL';

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILiTY_FILTER:
            return action.payload.filter
        default:
            return state;
    }
}