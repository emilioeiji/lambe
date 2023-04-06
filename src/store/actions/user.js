import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes"

export const login = user => {
    return {
        type: USER_LOGGED_IN,
    }
}