import { apiBaseURL } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAILURE
} from './../Utils/ActionTypes';

export default function FetchCoinData(){
    return (dispatch) => {
        dispatch({type: FETCHING_COIN_DATA})
        return fetch(`${apiBaseURL}/v1/ticker/?limit=10`)
            .then(res => {
                res.json().then( data => {
                    dispatch({type: FETCHING_COIN_DATA_SUCCESS, payload: data})
                })
            })
            .catch(err => {
                dispatch({type: FETCHING_COIN_DATA_FAILURE, payload: "error occurred"})
            })
    }
}