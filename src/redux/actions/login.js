import {
  GET_LOGIN_STARTED,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  GET_LOGOUT_SUCCESS,
} from './types';

import axios from 'axios';

export const getLogin = (data) => {

  return dispatch => {
    dispatch(getLoginStarted());
    const body = {
      "user": {
        "email": data.email,
        "password":  data.password
      }
    }
    axios
      .post(`https://react-rails-api-demo.herokuapp.com/api/v1/signin`, body  )
      .then(res => {
        
        localStorage.setItem('user-info', JSON.stringify(res.data));
        dispatch(getLoginSuccess(res.data));
      })
      .catch(err => {
        dispatch(getLoginFailure(err.message));
      });
  };
};

const getLoginSuccess = (res) => ({
  type: GET_LOGIN_SUCCESS,
  payload: res
});


const getLoginFailure = (error) => ({
  type: GET_LOGIN_FAILURE,
  payload: {
    error
  }
});

const getLoginStarted = () => ({
  type: GET_LOGIN_STARTED
});


export const getLogout = (data) => {
  return dispatch => {
    dispatch(getLogoutSuccess());
  };
};


const getLogoutSuccess = () => ({
  type: GET_LOGOUT_SUCCESS
});

