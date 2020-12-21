import { authService } from "../../services";
import { Dispatch } from 'redux';
// import { actSetUserInfor } from "../user/actions";
// import { actShowLoading, actHideLoading } from "../app/actions";


// types
import { IRouteAuth } from 'models/IRoute';

const nameSpace = 'auth:';

export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;
export const LOGOUT_SUCCESS = `${nameSpace}LOGOUT_SUCCESS`;

export const actLoginSuccess = (values: { token: string }) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: values.token
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

type UserloginData = {
  email: string,
}
// types
// import { IUserInfo } from 'models/IRoute';

// asyncHandleLogin là một function return về một function khác ???
export const asyncHandleLogin = (values: UserloginData) => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(actShowLoading());
      const response = await authService.login({ email: values.email });
      // dispatch(actHideLoading());

      if (response.data.status !== 200) {
        return {
          ok: false,
          error: response.data.error
        }
      } else {
        // const user = response.data.user;
        const token = response.data.token;
        console.log("token ", token)
        // localStorage.setItem("token", JSON.stringify(token))
        // dispatch(actLoginSuccess({ token }));
        // dispatch(actSetUserInfor({ user }));
        return { ok: true }
      }
    } catch (err) {
      // dispatch(actHideLoading());
      return { ok: false, error: err.message }
    }
  }
}