import * as EmploeeActionTypes from '../actions/emploee';

const initialState = {
    employees: [

    ],
    defSelectOptions: [
        {
            id: 0,
            name: ' '
        },
        {
            id: 1,
            name: 'Name'
        },
        {
            id: 2,
            name: 'Phone'
        }
    ],
    sortKey: 0,
    sortDirection: 1,
    findValue: ''
}

export default function Emploee( state = initialState, action ) {
    switch(action.type) {
        case EmploeeActionTypes.GET_EMPLOEE_SUCCESS: {
            const updateEmploee = [
                ...state.employees, 
                ...action.employees
            ];

            return {
                ...state,
                employees: updateEmploee
            }
        }

        case EmploeeActionTypes.SET_SORT_SELECT: {
            return {
                ...state,
                sortKey: action.sortKey
            }
        }

        case EmploeeActionTypes.SET_SORT_DIRECTION: {
            return {
                ...state,
                sortDirection: action.sortDirection
            }
        }

        case EmploeeActionTypes.SET_FIND_FILTER: {
            return {
                ...state,
                findValue: action.findValue
            }
        }

        default: 
            return state
    }
}
