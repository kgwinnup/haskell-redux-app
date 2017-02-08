
import { GET_JSON, JSON_POST } from '../middleware/http';

export const AUTHENTICATED = "AUTHENTICATED";
export const USER_FROM_COOKIE = "USER_FROM_COOKIE";
export const LOGOUT = "LOGOUT";

export function setFromCookie(userId, fullName) {
    return {
        type: USER_FROM_COOKIE,
        userId: userId,
        fullName: fullName
    }
}

export function logout() {
    return GET_JSON("/logout", function(data) {
        return {
            type: LOGOUT
        }
    });
}

export function login(username, password, remember) {
    const user = { loginUserName: username,
                   loginPassword: password,
                   loginRemember: remember };

    return JSON_POST("/login", user, function(data) { 
        return {
            type: AUTHENTICATED,
            userId: data.userId,
            name: data.fullName
        };
    });
}


