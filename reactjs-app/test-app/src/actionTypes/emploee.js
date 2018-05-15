import * as EmploeeActionTypes from '../actions/emploee';

export const updateEmploee = (employees) => {
    return {
        type: EmploeeActionTypes.GET_EMPLOEE_SUCCESS,
        employees
    }
}