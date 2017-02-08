
import * as C from '../actions/user';

const initialState = {
    userId: null,
    fullName: null,
}

export default function user (state = initialState, action) {
    switch (action.type) {
        case C.AUTHENTICATED:
            return Object.assign({}, state, {
                userId: action.userId,
                fullName: action.fullName
            });

        case C.USER_FROM_COOKIE:
            return Object.assign({}, state, {
                userId: action.userId,
                fullName: action.fullName
            });

        case C.LOGOUT:
            return Object.assign({}, state, {
                userId: null,
                fullName: null
            });

        default:
            return state;
    }
}
