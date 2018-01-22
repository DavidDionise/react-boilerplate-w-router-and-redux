import * as ActionTypes from 'constants';

const textValues = (
  state = {
    homepage_body: ''
  },
  { type, payload }
) => {
  switch(type) {
    case ActionTypes.UPDATE_HOMEPAGE_BODY: {
      return { ...state, homepage_body: payload };
    }
  }

  return state;
};

export default textValues;
