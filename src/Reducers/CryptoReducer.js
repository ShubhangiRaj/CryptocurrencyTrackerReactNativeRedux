import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAILURE
} from './../Utils/ActionTypes';

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMsg : null
}
export default function(state = initialState, action){
    switch(action.type){
        case FETCHING_COIN_DATA:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_COIN_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            }
        case FETCHING_COIN_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                hasError: true,
                errorMsg: action.payload
            }
        default:
            return state
    }
}
