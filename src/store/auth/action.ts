import { authService } from "../../services";
import { Dispatch } from 'redux';
// import { actSetUserInfor } from "../user/actions";
// import { actShowLoading, actHideLoading } from "../app/actions";


// types
import { IRouteAuth } from 'models/IRoute';

const nameSpace = 'auth:';

export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;
export const LOGOUT_SUCCESS = `${nameSpace}LOGOUT_SUCCESS`;

export const actLoginSuccess = ({ token }: IRouteAuth) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token
    }
  }
}

export const actLogoutSuccess = () => {
  localStorage.removeItem("token")
  return {
    type: LOGOUT_SUCCESS,
    payload: {}
  }
}

type Itype = {
  email: string,
  password: string
}

// asyncHandleLogin là một function return về một function khác ???
export const asyncHandleLogin = ({ email, password }: Itype) => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(actShowLoading());
      const response = await authService.login({ email, password });
      // dispatch(actHideLoading());

      if (response.data.status !== 200) {
        return {
          ok: false,
          error: response.data.error
        }
      } else {
        const user = response.data.user;
        const token = response.data.token;
        localStorage.setItem("token", JSON.stringify(token))
        dispatch(actLoginSuccess({ token }));
        // dispatch(actSetUserInfor({ user }));
        return { ok: true }
      }
    } catch (err) {
      // dispatch(actHideLoading());
      return { ok: false, error: err.message }
    }
  }
}