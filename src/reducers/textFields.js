import * as ActionTypes from 'constants';

const textFields = (
  state = {
    fields: [],
    show_update_modal: false,
    current_field: null
  },
  { type, payload }
) => {
  switch(type) {
    case ActionTypes.TOGGLE_SHOW_UPDATE_FIELD_MODAL: {
      const { bool, current_field } = payload
      return {
        ...state,
        show_update_modal: bool,
        current_field: bool ? current_field : null
      };
    }
    case ActionTypes.UPDATE_FIELD: {
      return {
        ...state,
        fields: state.fields.map(f => f._id == payload._id ? payload : f),
        show_update_modal: false,
        current_field: null
      };
    }
    case ActionTypes.INIT_FIELDS: {
      return { ...state, fields: payload };
    }
  }

  return state;
};

export default textFields;
