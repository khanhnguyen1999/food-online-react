import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authService } from 'services';

import { actLoginSuccess } from 'actions/auth.action';
import { actSetUserInfor } from 'actions/user.action';

import { fetchUserData } from 'apis/user.api';

type IProps = {
  children: any
}

const Auth = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const token = authService.getAccessToken();


  useEffect(() => {
    if (!token) return;
    dispatch(actLoginSuccess(token));

    async function fetchUser() {
      const res = await fetchUserData(`/user?token=${token}`);
      dispatch(actSetUserInfor({
        user: res.data[0]
      }))
    }

    fetchUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return children
}

export default Auth;
