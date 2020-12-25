import axios from 'axios'
import { Dispatch } from 'redux'

const nameSpace = 'user:';

export const SET_USER_INFOR = `${nameSpace}SET_USER_INFOR`;
export const GET_USER_BY_ID = `${nameSpace}GET_USER_BY_ID`;
export const SET_USER_DETAIL = `${nameSpace}SET_USER_DETAIL`;
type USER = {
  user: any
}

export const actSetUserInfor = ({ user }: USER) => {
  return {
    type: SET_USER_INFOR,
    payload: user
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