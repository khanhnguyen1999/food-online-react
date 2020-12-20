import { userService } from "services";
// import { actShowLoading, actHideLoading } from "../app/actions";

const nameSpace = 'user:';

// types
import { IRouteAuth } from 'models/IRoute';

export const SET_USER_INFOR = `${nameSpace}SET_USER_INFOR`;

export const actSetUserInfor = ({ user }: IRouteAuth) => {
  return {
    type: SET_USER_INFOR,
    payload: {
      user
    }
  }
}
