export type IAppState = {
  isLoading: boolean;
  dialog: {
    type: 'error' | 'success',
    isShow: boolean,
    content: string,
  },
}

export type IAuthState = {
  ACCESS_TOKEN: string
}

type IUserData = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  language: string;
  password: string;
  token: string;
}

export type IUserState = {
  currentUser: IUserData | null
}

type IRootState = {
  app: IAppState;
  user: IUserState;
  auth: IAuthState;
};

export default IRootState;