import callApi from './callApi';

// User
export const requestSignInUser = ({ email, password }) => callApi('POST', 'users/signin', { email, password });

// Text Fields
export const requestUpdateField = ({ _id, markup }) => callApi('PUT', 'fields/update/', { _id, markup });
export const requestFetchFields = () => callApi('GET', 'fields/');
