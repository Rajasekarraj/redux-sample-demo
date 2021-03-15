import * as actionTypes from './actions/actionTypes';

let initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD_FIVE:
            return {
                ...state,
                counter: state.counter + 5
            }
        case actionTypes.SUBTRACT_FIVE:
            return {
                ...state,
                counter: state.counter - 5
            } 
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter((result, id) => {
                    return id !== action.resultEleId
                }) 
            }       

    }
    return state;
}

export default reducer;