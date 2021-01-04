export type IAppState = {
  isLoading: boolean;
  isLanguage: string,
  dialog: {
    type: 'error' | 'success',
    isShow: boolean,
    content: string,
    dataUpdate: any
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
type IFoodData = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  url: string
}
export type IFoodState = {
  listfood: IFoodData | null,
  food: IFoodData | null,
  newFood: IFoodData | null,
  foodId: number | null
}
export type IUserState = {
  currentUser: IUserData | null
}

type ITrelloData = {
  trelloData: any
}
export type ITrelloState = {
  trelloData: ITrelloData | null
}

type IRootState = {
  app: IAppState;
  user: IUserState;
  auth: IAuthState;
  food: IFoodState;
  trello: ITrelloState
};

export default IRootState;