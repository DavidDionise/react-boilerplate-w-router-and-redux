import * as ActionTypes from 'constants';

export const toggleShowUpdateFieldModal = (bool, current_field) => ({ type: ActionTypes.TOGGLE_SHOW_UPDATE_FIELD_MODAL, payload: { bool, current_field } });
export const updateField = field => ({ type: ActionTypes.UPDATE_FIELD, payload: field });
export const initFields = fields => ({ type: ActionTypes.INIT_FIELDS, payload: fields });
