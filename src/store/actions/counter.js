import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addFive = () => {
    return {
        type: actionTypes.ADD_FIVE
    }
}

export const subtractFive = () => {
    return {
        type: actionTypes.SUBTRACT_FIVE
    }
}