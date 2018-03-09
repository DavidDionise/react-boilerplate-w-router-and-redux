import * as ActionTypes from 'constants';

export const toggleUserLoggedIn = (logged_in, token) => ({ type: ActionTypes.TOGGLE_USER_LOGGED_IN, payload: { logged_in, token } });
export const updateToken = token => ({ type: ActionTypes.UPDATE_TOKEN, payload: token });
