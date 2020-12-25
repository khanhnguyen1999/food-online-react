
import axios from 'axios'
import { actSetUserInfor } from "../user/action";
import { Dispatch } from 'redux';

const nameSpace = 'auth:';

export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;
export const LOGOUT_SUCCESS = `${nameSpace}LOGOUT_SUCCESS`;

type DATA = {
  data: any
}
type EMAIL = {
  email: string
}

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
      console.log("data ", data)
      const response = await axios.get(`http://localhost:3000/user?email=${data.email}`)
      console.log("res ", response)
      if (response.data.status !== 200) {
        return {
          ok: false,
          error: response.data.error
        }
      } else {
        console.log("response ", response)
        const user = response.data.user;
        const token = response.data.token;
        localStorage.setItem("token", token)
        dispatch(actLoginSuccess({ token }));
        dispatch(actSetUserInfor({ user }));
        return { ok: true }
      }
    } catch (err) {
      return { ok: false, error: err.message }
    }
  }
}