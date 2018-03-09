import * as ActionTypes from 'constants';

const user = (
  state = {
    logged_in: true,
    token: ''
  },
  { type, payload }
) => {
  switch(type) {
    case ActionTypes.TOGGLE_USER_LOGGED_IN: {
      const { logged_in, token } = payload;
      return {
        ...state,
        logged_in,
        token: logged_in ? token : ''
      };
    }
    case ActionTypes.UPDATE_TOKEN: {
      return {
        ...state,
        token: payload
      };
    }
  }

  return state;
}

export default user;
