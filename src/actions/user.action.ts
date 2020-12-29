import axios from 'axios'
import { Dispatch } from 'redux'

const nameSpace = 'user:';

export const REGISTER_USER = `${nameSpace}REGISTER_USER`
export const SET_USER_INFOR = `${nameSpace}SET_USER_INFOR`;
export const GET_USER_BY_ID = `${nameSpace}GET_USER_BY_ID`;
export const SET_USER_DETAIL = `${nameSpace}SET_USER_DETAIL`;
type USER = {
  user: any
}

type RegisterDataType = {
  email: string,
  firstname: string,
  lastname: string,
  gender: string,
  language: string,
  token: string
}

export const actSetUserInfor = ({ user }: USER) => {
  return {
    type: SET_USER_INFOR,
    payload: user
  }
}

export const asyncHandleRegister = (data: RegisterDataType) => {
  return async (dispatch: Dispatch) => {
    try {
      const findEmail = await axios.get(`http://localhost:3000/user?email=${data.email}`)
      if (findEmail.status !== 200 && findEmail.status !== 201) {
        return {
          ok: false,
          error: "Email was wrong.please input another email..."
        }
      }
      else {
        const response = await axios.post(`http://localhost:3000/user`, data)
        if (response.status !== 201) {
          return {
            ok: false,
            error: response.data.error
          }
        } else {
          const user = response.data;
          const token = response.data.token;
          localStorage.setItem("token", token)
          // dispatch(actLoginSuccess({ token }));
          dispatch(actSetUserInfor({ user }));
          return { ok: true }
        }
      }
    } catch (err) {
      return { ok: false, error: "Error. Please register again.." }
    }
  }
}

// export const asyncGetUserById = ({ userid }) => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response = await userService.getUserById({ userid });

//       if (response?.data?.status === 200) {
//         const user = response.data.user;
//         dispatch(actSetUserInfor({ user }));
//         return {
//           ok: true,
//           user: user
//         }
//       }
//       return { ok: false, error: response?.data?.error };
//     } catch (err) {
//       dispatch(actHideLoading());
//       return { ok: false, error: err.message }
//     }
//   }
// }