
import axios from 'axios'
import { actSetUserInfor } from "../user/action";
import { Dispatch } from 'redux';

const nameSpace = 'auth:';

export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;
export const LOGOUT_SUCCESS = `${nameSpace}LOGOUT_SUCCESS`;


type TOKEN = {
  token: string
}

export const actLoginSuccess = ({ token }: TOKEN) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  }
}

export const actLogoutSuccess = () => {
  localStorage.removeItem("token")
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
      const response: any = await axios.get(`http://localhost:3000/user?email=${data.email}`)
      if (response.status !== 200) {
        return {
          ok: false,
          error: response.data.error
        }
      } else {
        const user = response.data;
        const token = response.data[0].token;
        localStorage.setItem("token", response)
        dispatch(actLoginSuccess({ token }));
        dispatch(actSetUserInfor({ user }));
        return { ok: true }
      }
    } catch (err) {
      return { ok: false, error: "Error. Please login again.." }
    }
  }
}