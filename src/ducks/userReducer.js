import axios from 'axios';

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export function getUserData () {
    let userData = axios.get('/auth/user-data').then( res => {
        return res.data.user
    })
    return {
        type: REQUEST_USER_DATA,
        payload: userData
    }
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            return { 
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        default:
            return state
    }
}