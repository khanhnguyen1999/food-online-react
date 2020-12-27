
import axios from 'axios'
import { actSetUserInfor } from "../user/action";
import { Dispatch } from 'redux';

import { httpRequest, authService } from 'services';

const nameSpace = 'auth:';

export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;
export const LOGOUT_SUCCESS = `${nameSpace}LOGOUT_SUCCESS`;
export const SET_USER_DATA = `${nameSpace}SET_USER_DATA`;

export const actLoginSuccess = (token: string) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  }
}

export const actLogoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {}
  }
}

type LoginDataType = {
  email: string,
}

export const asyncHandleLogin = (data: LoginDataType) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await httpRequest.get(`http://localhost:3000/user?email=${data.email}`);
      if (response.data.length === 0) {
        return {
          ok: false,
          res: 'Email not found'
        }
      } 

      const { token } = response.data[0];
      return {
        ok: true,
        res: token
      }
    } catch (err) {
      return { ok: false, res: "Error. Please login again.." }
    }
  }
}
export const logout = () => (dispatch: Dispatch<any>) => {
  authService.logOut();
  dispatch({ type: LOGOUT_SUCCESS });
};

export const setUserData = (user: any) => (dispatch: Dispatch<any>) => {
  dispatch({ type: SET_USER_DATA, payload: user });
};