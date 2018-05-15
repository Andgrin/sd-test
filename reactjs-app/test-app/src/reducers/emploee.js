import * as EmploeeActionTypes from '../actions/emploee';

const initialState = {
    employees: [
        {
            "id": 1,
            "first_name": "Hakim",
            "last_name": "Gillice",
            "email": "hgillice0@meetup.com",
            "avatar": "https://robohash.org/dolorumfugitoptio.jpg?size=150x150&set=set1",
            "company": "Aimbo",
            "adress": "953 Heffernan Circle",
            "phone": "842-376-3072"
          },
          {
            "id": 2,
            "first_name": "Lisha",
            "last_name": "Mashal",
            "email": "lmashal1@geocities.jp",
            "avatar": "https://robohash.org/estetlaborum.jpg?size=150x150&set=set1",
            "company": "Brainlounge",
            "adress": "86 Grasskamp Terrace",
            "phone": "690-289-5789"
          },
          {
            "id": 3,
            "first_name": "Fayette",
            "last_name": "Brannon",
            "email": "fbrannon2@addthis.com",
            "avatar": "https://robohash.org/laboriosamsuntquasi.jpg?size=150x150&set=set1",
            "company": "Zoomzone",
            "adress": "69 Talisman Trail",
            "phone": "478-513-4801"
          },
    ],
    filters: {
        sortKey: '',
        sortDirection: ''
    }
}

export default function Emploee( state = initialState, action ) {
    switch(action.type) {
        case EmploeeActionTypes.GET_EMPLOEE_SUCCESS: {
            const updateEmploee = [
                ...state.employees, {
                    employees: action.employees
                }
                
                // {
                //     adress: action.adress,
                //     avatar: action.avatar,
                //     company: action.company,
                //     email: action.email,
                //     first_name: action.first_name,
                //     id: action.id,
                //     last_name: action.last_name,
                //     phone: action.phone
                // }
            ];

            return {
                ...state,
                employees: updateEmploee
            }
        }

        default: 
            return state
    }
}
