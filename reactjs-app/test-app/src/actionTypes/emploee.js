import * as EmploeeActionTypes from '../actions/emploee';

export const updateEmploee = (employees) => {
    return {
        type: EmploeeActionTypes.GET_EMPLOEE_SUCCESS,
        employees
    }
}

export const setSortSelectValue = sortKey => {
    return {
        type: EmploeeActionTypes.SET_SORT_SELECT,
        sortKey
    }
}

export const setSortDirection = sortDirection => {
    return {
        type: EmploeeActionTypes.SET_SORT_DIRECTION,
        sortDirection
    }
}

export const setFindFilterValue = findValue => {
    return {
        type: EmploeeActionTypes.SET_FIND_FILTER,
        findValue
    }
}