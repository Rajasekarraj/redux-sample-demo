import * as actionTypes from './actionTypes';

const saveResult = () => {
    return {
        type: actionTypes.STORE_RESULT
    }
}

// ASYNC CALLS made by dispatch
export const storeResult = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult())
        },2000)
    }
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultEleId: id
    }
}