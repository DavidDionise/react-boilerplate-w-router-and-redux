import store from 'store';
import { updateToken } from 'actions';

const callApi = (
  method,
  route,
  payload
) => {
  const url = `${API_URL}/${route}`;
  const fetch_options = {
    method,
    body: JSON.stringify(payload),
    headers: new Headers({ 'content-type': 'application/json' }),
  };
  const { user } = store.getState();
  if(user.token) {
    fetch_options.headers.append('token', user.token);
  }

  return fetch(url, fetch_options)
  .then(res => {
    if(res.status == 200) {
      return res.json()
      .then(data => {
        if(data.updated_token) {
          localStorage.setItem('token', data.updated_token);
          store.dispatch(updateToken(data.updated_token));
        }

        return Promise.resolve(data);
      });
    }
    else {
      return res.json()
      .then(data => {
        return Promise.reject(data);
      });
    }
  })
}

export default callApi;
